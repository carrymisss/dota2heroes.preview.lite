import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Row, Col, PageHeader, Space, Tooltip, Card  } from 'antd'
import { ArrowLeftSquare, Diamond, DiamondFill } from 'react-bootstrap-icons'
import { Scrollbars } from 'react-custom-scrollbars'
import AbilitiesTabs from './AbilitiesTabs'
import StatsRow from './StatsRow'
import HeroTable from './HeroTable'
import _ from 'lodash'
import Overdrive from 'react-overdrive'

const Complexity = ({ level }) => {
	let forRender = null

	if (level === 1) {
		forRender =
			<>
			<Tooltip placement="bottomLeft" title="The abilities of this hero are quite simple.">
				<div style={{ display: "inline-flex", alignItems: "center" }}><DiamondFill />&nbsp;<Diamond />&nbsp;<Diamond /></div>
			</Tooltip>
			</>
	} else if (level === 2) {
		forRender =
			<>
			<Tooltip placement="bottomLeft" title="This hero's abilities require a moderate level of coordination, reaction and general play.">
				<div style={{ display: "inline-flex", alignItems: "center" }}><DiamondFill />&nbsp;<DiamondFill />&nbsp;<Diamond /></div>
			</Tooltip>
			</>
	} else {
		forRender =
			<>
			<Tooltip placement="bottomLeft" title="The abilities of this hero require a high level of coordination, reaction and play in general.">
				<div style={{ display: "inline-flex", alignItems: "center" }}><DiamondFill />&nbsp;<DiamondFill />&nbsp;<DiamondFill /></div>
			</Tooltip>
			</>
	}

	return (
		<>
		<div style={{ display: "flex", alignItems: "center" }}>
			{ forRender }
		</div>
		</>
	)
}

const Features = ({ features }) => {
	let featuresString = []

	for (let i = 0; i < features.rest.length; i++) {
		featuresString.push(<span key={i} style={{ color: "#b1b1b2", fontWeight: "300" }}>{_.toUpper(features.rest[i])}</span>)
	}

	return (
		<>
		<h3 style={{ marginBottom: "0" }}>
			<Space>
				<b style={{ color: "rgba(255, 255, 255, 0.7)" }}>{_.toUpper(features.range)}</b>{featuresString}
			</Space>
		</h3>
		</>
	)
}

const HeroPage = ({ heroes, isReady }) => {
	const history = useHistory()

	const { herourl } = useParams()

	const exm = heroes.filter(el => {return el.name.indexOf(herourl) > -1}).[0]

	const { name, attribute, icon, attrIcon, complexity, features, characteristics, stats, talentsTree, abilities, miniIcon } = exm

	document.getElementById('favicon').href = miniIcon
	document.getElementsByTagName('title')[0].innerHTML = name

	return (
		<>
		{ isReady &&
			<Overdrive duration={150} id={name} style={{ height: '100%', width: '100%' }}>
			<Scrollbars autoHide universal={true} autoHideTimeout={800} autoHideDuration={280} renderTrackVertical={()=>{return(<div className="scroll__track-vert"></div>)}} renderThumbVertical={()=>{return(<div className="scroll__thumb-vert"></div>)}}
			renderThumbHorizontal={()=>{return(<div className="scroll__thumb-hor"></div>)}} renderTrackHorizontal={()=>{return(<div className="scroll__track-hor"></div>)}}
			style={{ width: "100%", height: "100%" }}>
				<div className="container">
					<Row gutter={[30, 15]}>
						<Col span={24}>
							<PageHeader
							onBack={() => history.push('/')}
							title='Back to all heroes'
							subTitle={null}
							backIcon={<ArrowLeftSquare size={40} />}
							/>
						</Col>
					</Row>
					<Row gutter={30}>
						<Col span={17}>
							<Row gutter={[30, 15]}>
								<Col span={24} style={{ display: "flex", flexDirection: "column" }}>
									<div className="w-100" style={{ height: "100%" }}>
										<h1 style={{ marginBottom: "0", fontSize: "40px", color: "#fff" }}>{_.toUpper(name)}</h1>
									</div>
									<div className="d-f-s w-100" >
										<Space size="large">
											<div className="d-f">
												<img width="20" src={attrIcon} alt={attribute} />
											</div>
											<Complexity level={complexity} />
											<Features features={features} />
										</Space>
									</div>
								</Col>
							</Row>
							<Row gutter={[30, 15]}>
								<Col span="24">
									<AbilitiesTabs abilities={abilities} talents={talentsTree} />
								</Col>
							</Row>
						</Col>
						<Col span={7}>
							<Row gutter={[0, 15]}>
								<Col span={24}>
									<Card className="table-card" title={<h3 className="table-name">{name}</h3>} style={{ width: "100%" }} cover={
										<div className="table-cover">
											<div className="table-cover-preview">
												<img src={icon} alt={name} className="table-cover-img" />
											</div>
										</div>
									}>
										<StatsRow stats={stats} attribute={attribute} />
										<HeroTable characteristics={characteristics} />
									</Card>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</Scrollbars>
		</Overdrive>
		}
		</>
	)
}

export default HeroPage
