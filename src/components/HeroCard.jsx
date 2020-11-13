import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import _ from 'lodash'
import Overdrive from 'react-overdrive'

const HeroCard = ({ hero, strengthPicked, agilityPicked, intelligencePicked, oneComplexity, twoComplexity, threeComplexity, supportsPicked, carriesPicked }) => {
	// <video autoPlay="autoplay" loop="loop" alt={hero.name}><source src={`heroes_gifs/npc_dota_hero_${_.lowerCase(hero.name)}.webm`} /></video>
	const [img, setImg] = useState(<img alt={hero.name} src={`heroes_gifs/npc_dota_hero_${(_.lowerCase(hero.name)).split(' ').join('_')}.png`} />)

	return (
		<>
		<Link to={`/${hero.name}`}>
			<Overdrive duration={150} id={hero.name}>
				<Card cover={img}
					onMouseEnter={() => setImg(<video style={{ height: '100%' }} autoPlay="autoplay" loop="loop" alt={hero.name}><source src={`heroes_gifs/npc_dota_hero_${(_.lowerCase(hero.name)).split(' ').join('_')}.mp4`} /></video>)}
					onMouseLeave={() => setImg(<img alt={hero.name} src={`heroes_gifs/npc_dota_hero_${(_.lowerCase(hero.name)).split(' ').join('_')}.png`} />)}
					className={`hero-card ${
						((hero.attribute !== 'strength' && strengthPicked) ||
						(hero.attribute !== 'agility' && agilityPicked)  ||
						(hero.attribute !== 'intelligence' && intelligencePicked) ||
						(hero.complexity !== 1 && oneComplexity) ||
						(hero.complexity !== 2 && twoComplexity) ||
						(hero.complexity !== 3 && threeComplexity) ||
						(!hero.features.rest.includes('Support') && supportsPicked) ||
						(!hero.features.rest.includes('Carry') && carriesPicked))
						? 'mutedCard' : ''
					}`}>

					{/*<h3 className="card-title">{hero.name}</h3>*/}
				</Card>
			</Overdrive>
		</Link>
		</>
	)
}

export default HeroCard
