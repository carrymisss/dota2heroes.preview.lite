import React from 'react'
import { Tag } from 'antd'


const StatsRow = ({ stats, attribute }) => {
	return (
		<>
		<div className="statsrow">
			<Tag color={ attribute === 'strength' ? "red" : null }>
				<div className="statsrow-col">
					<img src="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/7/7a/Strength_attribute_symbol.png/36px-Strength_attribute_symbol.png" alt="strength"/>
					<span><b>{stats.strength.base}</b>+{stats.strength.gain}</span>
				</div>
			</Tag>
			<Tag color={ attribute === 'agility' ? "green" : null }>
				<div className="statsrow-col">
					<img src="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/2/2d/Agility_attribute_symbol.png/36px-Agility_attribute_symbol.png" alt="agility"/>
					<span><b>{stats.agility.base}</b>+{stats.agility.gain}</span>
				</div>
			</Tag>
			<Tag color={ attribute === 'intelligence' ? "blue" : null }>
				<div className="statsrow-col">
					<img src="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/5/56/Intelligence_attribute_symbol.png/36px-Intelligence_attribute_symbol.png" alt="intelligence" />
					<span><b>{stats.intelligence.base}</b>+{stats.intelligence.gain}</span>
				</div>
			</Tag>
		</div>
		</>
	)
}

export default StatsRow
