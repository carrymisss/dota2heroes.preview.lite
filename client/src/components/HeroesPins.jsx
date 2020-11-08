import React from 'react'
import HeroCard from '../containers/HeroCard'
import FilterButtons from '../containers/FilterButtons'
import { Scrollbars } from 'react-custom-scrollbars'
import { Row, Col, Divider } from 'antd'
import axios from 'axios'

const HeroesPins = ({ heroes, isReady }) => {
	document.getElementById('favicon').href = "/favicon.ico"
	document.getElementsByTagName('title')[0].innerHTML = "All heroes"

	return (
		<>
		<div style={{ overflow: 'hidden' }}>
			<div style={{ padding: '0 15px', width: '100%' }}>
				{ isReady && <FilterButtons /> }
			</div>
		</div>
		<Scrollbars autoHide universal={true} autoHideTimeout={800} autoHideDuration={280} renderTrackVertical={()=>{return(<div className="scroll__track-vert"></div>)}} renderThumbVertical={()=>{return(<div className="scroll__thumb-vert"></div>)}}
		renderThumbHorizontal={()=>{return(<div className="scroll__thumb-hor"></div>)}} renderTrackHorizontal={()=>{return(<div className="scroll__track-hor"></div>)}}
		style={{ width: '100%', height: 'calc(100vh - 60px)' }}>
			<div className="container">
				{ isReady &&
					<>
					<Row>
						<Col span={24}>
							<Divider orientation="left" style={{ margin: '0 0 16px' }}>
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<img width="22" height="22" src="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/7/7a/Strength_attribute_symbol.png/36px-Strength_attribute_symbol.png" alt="strength" />
									<h2>&nbsp;Strength</h2>
								</div>
						</Divider>
						</Col>
					</Row>
					<Row justify="start" gutter={[15, 15]}>
						{ heroes.map((hero) => (
							(hero.attribute === 'strength') &&
							<Col key={hero.name} span={3}>
								<HeroCard hero={hero} />
							</Col>))
						}
					</Row>
					<Row>
						<Col span={24}>
							<Divider orientation="left">
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<img width="22" height="22" src="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/2/2d/Agility_attribute_symbol.png/36px-Agility_attribute_symbol.png" alt="strength" />
									<h2>&nbsp;Agility</h2>
								</div>
							</Divider>
						</Col>
					</Row>
					<Row justify="start" gutter={[15, 15]}>
						{ heroes.map((hero) => (
							(hero.attribute === 'agility') &&
							<Col key={hero.name} span={3}>
								<HeroCard hero={hero} />
							</Col>
						))}
					</Row>
					<Row>
						<Col span={24}>
							<Divider orientation="left">
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<img width="22" height="22" src="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/5/56/Intelligence_attribute_symbol.png/36px-Intelligence_attribute_symbol.png" alt="strength" />
									<h2>&nbsp;Intelligence</h2>
								</div>
							</Divider>
						</Col>
					</Row>
					<Row justify="start" gutter={[15, 15]}>
						{ heroes.map((hero) => (
							(hero.attribute === 'intelligence') &&
							<Col key={hero.name} span={3}>
								<HeroCard hero={hero} />
							</Col>
						))}
					</Row>
			      </>
			 	}
			</div>
		</Scrollbars>
		</>
	)
}

export default HeroesPins
