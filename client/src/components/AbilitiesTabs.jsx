import React from 'react'
import { Divider, Tabs, Card, Col, Row } from 'antd'
import _ from 'lodash'


const AbilitiesTabs = ({ abilities, talents }) => {
	const { TabPane } = Tabs

	return (
		<>
		<Tabs type="card" className="abilities-tabs">
    		{ abilities.map((skill, i) => {
				return (
					<TabPane tab={<img width={80} height={80} src={skill.icon} alt={skill.name} />} key={skill.name+(i*i)}>
						<Row gutter={15}>
							<Col span={13}>
								<Card title={<h2 style={{ color: "#fff", lineHeight: "1" }}>{_.toUpper(skill.name)}</h2>} style={{ width: "100%" }}>
									{ skill.info.map((item, i) => {
										return (
											<h4 style={{ fontWeight: "400" }} key={i}>
												<b>{_.toUpper(item[0])}</b>: <span className={item[1]}>{item[1]}</span>
											</h4>
										)
									}) }
									<Divider style={{ margin: '12px 0' }} />
									<p className="abilities-description">{skill.description}</p>
										{ skill.specialDescr.map((item, i) => {
											return (
												<h4 style={{ fontWeight: "400" }} key={i*(7+7)} className=" ability-additional-description">
													{_.toUpper(item[0])}: {item[1]}
												</h4>
											)
										}
										) }
				 						{ skill.actions.map((item, i) => {
											return (
												<h4 style={{ fontWeight: "400" }} key={i*(2+10)}>
													<b>{_.toUpper(item[0])}</b>: <span className="text-muted">{item[1]}</span>
												</h4>
											)
										}
										) }
				 						<div className="mana-cooldown">
				 							{ skill.cost.map((item, i) => {
												return (
													<div key={i} className=" mana-cooldown__item"><img src={"https://dota2.ru/img/icons/" + item[0] + ".png"} alt={item[0]} title={item[0]}/>&ensp;{item[1]}</div>
												)
											}
											) }
				 						</div>
								</Card>
							</Col>
							<Col span={11}>
								<Card title={<h2 style={{ textAlign: "center", lineHeight: "1" }}>Talents tree</h2>} className="talents-tree">
									{ _.toPairs(talents).map(lvl => {
										return (
											<div className="talents-tree__row" key={lvl[0]}>
												<div className="talents-tree__col-left">{ lvl[1][0] }</div>
												<div className="talents-tree__col-count">
													{ lvl[0] === 'tenth' ? '10' : lvl[0] === 'fifteenth' ? '15' : lvl[0] === 'twentieth' ? '20' : '25' }
												</div>
												<div className="talents-tree__col-right">{ lvl[1][1] }</div>
											</div>
										)
									}) }
								</Card>
							</Col>
						</Row>
		    		</TabPane>
				)
			}) }
		</Tabs>
		</>
	)
}

export default AbilitiesTabs
