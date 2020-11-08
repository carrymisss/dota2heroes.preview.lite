import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

const HeroCard = ({ hero, strengthPicked, agilityPicked, intelligencePicked, oneComplexity, twoComplexity, threeComplexity, supportsPicked, carriesPicked }) => {
	// <video autoPlay="autoplay" loop="loop" alt={hero.name}><source src={`heroes_gifs/npc_dota_hero_${_.lowerCase(hero.name)}.webm`} /></video>
	return (
		<>
		<Link to={`/${hero.name}`}>
			<Card cover={<img src={hero.icon} alt={hero.name} />}
				className={`hero-card ${
					((hero.attribute !== 'strength' && strengthPicked) ||
					(hero.attribute !== 'agility' && agilityPicked)  ||
					(hero.attribute !== 'intelligence' && intelligencePicked) ||
					(hero.complexity !== 1 && oneComplexity) ||
					(hero.complexity !== 2 && twoComplexity) ||
					(hero.complexity !== 3 && threeComplexity) ||
					(!hero.features.rest.includes('Support') && supportsPicked) ||
					(!hero.features.rest.includes('Carry') && carriesPicked))
					? 'mutedCard' : null
				}`}>
	       	<h3 className="card-title">{hero.name}</h3>
	     	</Card>
		</Link>
		</>
	)
}

export default HeroCard
