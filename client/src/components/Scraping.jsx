import React, { useState, useEffect } from 'react'
import { Card, Progress, Col, Row, Statistic, message } from 'antd'
import axios from 'axios'
import cheerio from 'cheerio'
import _ from 'lodash'


const Scraping = ({ heroes, setHeroes, setIsReady }) => {
	const [progress, setProgress] = useState(0)
	const [fetchHeroes, setFetchHeroes] = useState(0)
	// const [heroesInfo, setHeroesInfo] = useState([])
	const [heroesCount, setHeroesCount] = useState(0)
	const [error, setError] = useState(false)
	const [ignoreFetch, setIgnoreFetch] = useState(true)

	useEffect(()=> {
		if (!ignoreFetch) {
			axios.get(`https://cors-anywhere.herokuapp.com/https://dota2.gamepedia.com/Heroes`).then(({ data, headers }) => {
				const $ = cheerio.load(data)
				let heroes_links = []

				$('.mw-parser-output table tbody tr:nth-child(even) div div a').each((i, el) => {
					heroes_links.push($(el).attr('href'))
				})
				heroes_links.sort()
				setHeroesCount(heroes_links.length)
				let c = 0
				heroes_links.sort().forEach((el, i) => {
					axios.post('/api', {link: el}).then(({ data, status }) => {
						if (data && !error) {
							if (status === 200) {
								++c
								setHeroes(data)
								setProgress(progress => progress+1)
								if (c === heroes_links.length) setTimeout(() => setIsReady(), 1000)
							} else if (status === 404) {
								message.error('1Error:	' + data)
								setError(true)
								return false
							}
						} else {
							message.error('2App crash!!')
							setError(true)
							return false
						}
					}).catch((err) => {
						message.error('3Error:	' + err)
						setError(true)
						return false
					})
				})
			}).catch((err) => {
				message.error('4Error:	' + err)
				setError(true)
				return false
			})
		}
		return setIgnoreFetch(false)
	}, [ignoreFetch])

	return (
		<>
		<div className="scraping-card__wrapper">
			<Card className="scraping-card">
				<Row gutter={[30, 30]} justify="center">
					<Col span="20">
						<Row gutter={30}>
							<Col>
								<Statistic title="Fetching heroes" value={progress} suffix={`/ ${heroesCount}`} />
							</Col>
						</Row>
					</Col>
				</Row>
				<Row gutter={[30, 30]} justify="center">
					<Col span="20">
						<Progress
							size="large"
			   			strokeColor={{
			     				'0%': '#108ee9',
			     				'100%': '#87d068',
							}}
							status={error ? 'exception' : (_.round((progress * 100) / heroesCount) === 100) ? null : 'active'}
							percent={_.round((progress * 100) / heroesCount)} />
					</Col>
					<Col span={20}>
						<p></p>
					</Col>
				</Row>
			</Card>
		</div>
		</>
	)
}

export default Scraping
