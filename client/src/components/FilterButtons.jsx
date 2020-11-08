import React from 'react'
import { Row, Col } from 'antd'
import { DiamondFill } from 'react-bootstrap-icons'

const FilterButtons = ({ strengthPicked, agilityPicked, intelligencePicked, oneComplexity, twoComplexity, threeComplexity, supportsPicked, carriesPicked, setPickedStrength, setPickedAgility, setPickedIntelligence, setOneComplexity, setTwoComplexity, setThreeComplexity, setSupport, setCarry }) => {
	return (
		<>
		<Row justify="between" gutter={30} style={{ padding: '16px 0 16px' }}>
			<Col>
				<div className="controls-buttons-wrapper">
					<h2 style={{ fontSize: '18px', lineHeight: '1' }}>СЛОЖНОСТЬ&nbsp;</h2>
					<button onClick={setOneComplexity} className={ oneComplexity || twoComplexity || threeComplexity ? 'active-complexity-btn complexity-btn' : 'complexity-btn' }><DiamondFill size={16} style={{ verticalAlign: 'middle' }} /></button>
					<button onClick={setTwoComplexity} className={ twoComplexity || threeComplexity ? 'active-complexity-btn complexity-btn' : 'complexity-btn' }><DiamondFill size={16} style={{ verticalAlign: 'middle' }} /></button>
					<button onClick={setThreeComplexity} className={ threeComplexity ? 'active-complexity-btn complexity-btn' : 'complexity-btn' }><DiamondFill size={16} style={{ verticalAlign: 'middle' }} /></button></div>
			</Col>
			<Col>
				<div className="controls-buttons-wrapper">
					<h2 style={{ fontSize: '18px', lineHeight: '1' }}>ТИП&nbsp;</h2>
					<button onClick={setCarry} className={ carriesPicked ? 'active-complexity-btn complexity-btn' : 'complexity-btn' }><img width="16" height="16" src="fight.svg" alt="iugy" style={{ verticalAlign: 'middle' }} /></button>
					<button onClick={setSupport} className={ supportsPicked ? 'active-complexity-btn complexity-btn' : 'complexity-btn' } style={{ width: '36px', padding: '0' }}><img width="20" height="20" src="magic.svg" alt="iugy" style={{ verticalAlign: 'middle' }} /></button>
				</div>
			</Col>
		</Row>
		</>
	)
}

export default FilterButtons
