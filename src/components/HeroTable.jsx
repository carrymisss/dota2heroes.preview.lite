import React from 'react'
import { Table } from 'antd'


const HeroTable = ({ characteristics }) => {
	const dataSource = [
		{
			key: 0,
			level: "Health",
			base: characteristics.base.health,
			1: characteristics.first.health,
			15: characteristics.fifteenth.health,
			25: characteristics.twentyfifth.health
		},
		{
			key: 1,
			level: "Health regen.",
			base: characteristics.base.healthRegen,
			1: characteristics.first.healthRegen,
			15: characteristics.fifteenth.healthRegen,
			25: characteristics.twentyfifth.healthRegen
		},
		{
			key: 2,
			level: "Magic resist.",
			base: characteristics.base.magicRes,
			1: characteristics.first.magicRes,
			15: characteristics.fifteenth.magicRes,
			25: characteristics.twentyfifth.magicRes
		},
		{
			key: 3,
			level: "Manapool",
			base: characteristics.base.mana,
			1: characteristics.first.mana,
			15: characteristics.fifteenth.mana,
			25: characteristics.twentyfifth.mana
		},
		{
			key: 4,
			level: "Mana regen.",
			base: characteristics.base.manaRegen,
			1: characteristics.first.manaRegen,
			15: characteristics.fifteenth.manaRegen,
			25: characteristics.twentyfifth.manaRegen
		},
		{
			key: 5,
			level: "Spell damage",
			base: characteristics.base.spellDmg,
			1: characteristics.first.spellDmg,
			15: characteristics.fifteenth.spellDmg,
			25: characteristics.twentyfifth.spellDmg
		},
		{
			key: 6,
			level: "Armor",
			base: characteristics.base.armor,
			1: characteristics.first.armor,
			15: characteristics.fifteenth.armor,
			25: characteristics.twentyfifth.armor
		},
		{
			key: 7,
			level: "Attac per sec.",
			base: characteristics.base.attacksPerSec,
			1: characteristics.first.attacksPerSec,
			15: characteristics.fifteenth.attacksPerSec,
			25: characteristics.twentyfifth.attacksPerSec
		},
		{
			key: 8,
			level: "Movespeed amp.",
			base: characteristics.base.moveSpeedAmp,
			1: characteristics.first.moveSpeedAmp,
			15: characteristics.fifteenth.moveSpeedAmp,
			25: characteristics.twentyfifth.moveSpeedAmp
		},
		{
			key: 9,
			level: "Damage",
			base: characteristics.base.damage,
			1: characteristics.first.damage,
			15: characteristics.fifteenth.damage,
			25: characteristics.twentyfifth.damage
		},
		{
			key: 10,
			level: "Movement speed",
			base: characteristics.movementSpeed
		},
		{
			key: 11,
			level: "Attack speed",
			base: characteristics.attackSpeed
		},
		{
			key: 12,
			level: "Turn rate",
			base: characteristics.turnRate
		},
		{
			key: 13,
			level: "Vision range",
			base: characteristics.visionRange
		},
		{
			key: 14,
			level: "Attack range",
			base: characteristics.attackRange
		},
		{
			key: 15,
			level: "Attack animation",
			base: characteristics.attackAnim
		},
		{
			key: 16,
			level: "Base attack time",
			base: characteristics.baseAttackTime
		}
	]
	const columns = [
		{
			title: 'Level',
			dataIndex: 'level',
			key: 'level',
			render: (text, row, index) => {
				if (index < 10) {
					return <span style={{ fontWeight: "500" }}>{text}</span>
				}
				return {
					children: <div style={{ fontWeight: "500", textAlign: "center", width: "100%" }}>{text}</div>,
					props: {
						colSpan: 2,
					}
				}
			}
		},
		{
			title: 'Base',
			dataIndex: 'base',
			key: 'base',
			render: (text, row, index) => {
				if (index < 10) {
					return text
				}
				return {
					children: <div style={{ textAlign: "center", width: "100%" }}>{text}</div>,
					props: {
						colSpan: 3,
					}
				}
			}
		},
		{
			title: '1',
			dataIndex: '1',
			key: '1',
			render: (text, row, index) => {
				if (index < 10) {
					return text
				}
				return {
					children: text,
					props: {
						colSpan: 0,
					}
				}
			}
		},
		{
			title: '15',
			dataIndex: '15',
			key: '15',
			render: (text, row, index) => {
				if (index < 10) {
					return text
				}
				return {
					children: text,
					props: {
						colSpan: 0,
					}
				}
			}
		},
		{
			title: '25',
			dataIndex: '25',
			key: '25',
			render: (text, row, index) => {
				if (index < 10) {
					return text
				}
				return {
					children: text,
					props: {
						colSpan: 0,
					}
				}
			}
		}
	]
	return (
		<>
		<Table dataSource={dataSource} columns={columns} size="small" pagination={ false } bordered className="hero-table" />
		</>
	)
}

export default HeroTable
