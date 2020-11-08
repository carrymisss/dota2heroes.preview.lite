const cheerio = require('cheerio')
const _ = require('lodash')

const parsingData = (data) => {
	const $ = cheerio.load(data)

	let name = $('h1#firstHeading').text()
	let attribute = _.lowerCase($('div#primaryAttribute>a').attr('title'))
	let complexity = (_.trim($('#mw-content-text>.mw-parser-output>table:not([class])>tbody>tr:nth-of-type(3)>td').text())) === '★☆☆' ? 1 : (_.trim($('#mw-content-text>.mw-parser-output>table:not([class])>tbody>tr:nth-of-type(3)>td').text())) === '★★☆' ? 2 : (_.trim($('#mw-content-text>.mw-parser-output>table:not([class])>tbody>tr:nth-of-type(3)>td').text())) === '★★★' ? 3 : null
	let rest = []
	let range = $('#mw-content-text>.mw-parser-output>p a').html()
	let icon = _.replace($('table.infobox a.image img').attr('src'), /(\.png\/(.){0,})/, '.png')
	let attrIcon = _.replace($('#primaryAttribute>a>img').attr('src'), /(\.png\/(.){0,})/, '.png')
	let miniIcon = _.replace($('#heroBio img.pixelart').attr('src'), /(\.png\/(.){0,})/, '.png')
	let s_base = $('table.infobox>tbody>tr>th div:nth-of-type(2) div:nth-of-type(4)').text().split('+')[0]
	let s_gain = $('table.infobox>tbody>tr>th div:nth-of-type(2) div:nth-of-type(4)').text().split('+')[1]
	let a_base = $('table.infobox>tbody>tr>th div:nth-of-type(2) div:nth-of-type(5)').text().split('+')[0]
	let a_gain = $('table.infobox>tbody>tr>th div:nth-of-type(2) div:nth-of-type(5)').text().split('+')[1]
	let i_base = $('table.infobox>tbody>tr>th div:nth-of-type(2) div:nth-of-type(6)').text().split('+')[0]
	let i_gain = $('table.infobox>tbody>tr>th div:nth-of-type(2) div:nth-of-type(6)').text().split('+')[1]
	let b_health = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(2n) td:nth-of-type(1n)').html())
	let b_healthRegen = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(3n) td:nth-of-type(1n)').html())
	let b_magicRes = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(1n) td').html())
	let b_mana = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(4n) td:nth-of-type(1n)').html())
	let b_manaRegen = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(5n) td:nth-of-type(1n)').html())
	let b_spellDmg = null
	let b_armor = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(6n) td:nth-of-type(1n)').html())
	let b_attacksPerSec = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(7n) td:nth-of-type(1n)').html())
	let b_moveSpeedAmp = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(2n) td').html())
	let b_damage = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(8n) td:nth-of-type(1n)').html())
	let fst_health = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(2n) td:nth-of-type(2n)').html())
	let fst_healthRegen = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(3n) td:nth-of-type(2n)').html())
	let fst_magicRes = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(1n) td').html())
	let fst_mana = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(4n) td:nth-of-type(2n)').html())
	let fst_manaRegen = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(5n) td:nth-of-type(2n)').html())
	let fst_spellDmg = null
	let fst_armor = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(6n) td:nth-of-type(2n)').html())
	let fst_attacksPerSec = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(7n) td:nth-of-type(2n)').html())
	let fst_moveSpeedAmp = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(2n) td').html())
	let fst_damage = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(8n) td:nth-of-type(2n)').html())
	let fth_health = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(2n) td:nth-of-type(3n)').html())
	let fth_healthRegen = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(3n) td:nth-of-type(3n)').html())
	let fth_magicRes = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(1n) td').html())
	let fth_mana = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(4n) td:nth-of-type(3n)').html())
	let fth_manaRegen = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(5n) td:nth-of-type(3n)').html())
	let fth_spellDmg = null
	let fth_armor = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(6n) td:nth-of-type(3n)').html())
	let fth_attacksPerSec = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(7n) td:nth-of-type(3n)').html())
	let fth_moveSpeedAmp = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(2n) td').html())
	let fth_damage = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(8n) td:nth-of-type(3n)').html())
	let t_health = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(2n) td:nth-of-type(4n)').html())
	let t_healthRegen = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(3n) td:nth-of-type(4n)').html())
	let t_magicRes = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(1n) td').html())
	let t_mana = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(4n) td:nth-of-type(4n)').html())
	let t_manaRegen = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(5n) td:nth-of-type(4n)').html())
	let t_spellDmg = null
	let t_armor = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(6n) td:nth-of-type(4n)').html())
	let t_attacksPerSec = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(7n) td:nth-of-type(4n)').html())
	let t_moveSpeedAmp = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(2n) td').html())
	let t_damage = _.trim($('table.evenrowsgray>tbody tr:nth-of-type(8n) td:nth-of-type(4n)').html())
	let movementSpeed = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(2n) td').html())
	let attackSpeed = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(3n) td').html())
	let turnRate = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(4n) td').html())
	let visionRange = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(5n) td').text()).split('\n')[0]
	let attackRange = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(6n) td').text()).split('\n')[0]
	let attackAnim = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(8n) td').text()).split('\n')[0]
	let baseAttackTime = _.trim($('table.oddrowsgray>tbody tr:nth-of-type(9n) td').html())
	let abilities = []
	let tenth = [
		$('table.wikitable>tbody tr:nth-of-type(5) td:nth-of-type(1)').text(),
		$('table.wikitable>tbody tr:nth-of-type(5) td:nth-of-type(2)').text()
	]
	let fifteenth = [
		$('table.wikitable>tbody tr:nth-of-type(4) td:nth-of-type(1)').text(),
		$('table.wikitable>tbody tr:nth-of-type(4) td:nth-of-type(2)').text()
	]
	let twentieth = [
		$('table.wikitable>tbody tr:nth-of-type(3) td:nth-of-type(1)').text(),
		$('table.wikitable>tbody tr:nth-of-type(3) td:nth-of-type(2)').text()
	]
	let twentyfifth = [
		$('table.wikitable>tbody tr:nth-of-type(2) td:nth-of-type(1)').text(),
		$('table.wikitable>tbody tr:nth-of-type(2) td:nth-of-type(2)').text()
	]

	$('#mw-content-text>.mw-parser-output>table:not([class])>tbody>tr:nth-of-type(2)>td>a[title=Role]').map((i, el) => {
		rest.push($(el).text())
	})

	$('.mw-parser-output div.ability-background').map((i, el) => {
		const n = cheerio.load(el)
		let name = _.trim(n('div.ability-background>div>div:nth-of-type(1)')[0].children[0].data)
		let icon = _.replace(n('div.ability-background>div>div:nth-of-type(2) div a.image img').attr('src'), /(\.png\/(.){0,})/, '.png')
		let description = _.trim(n('div.ability-background>div>div:nth-of-type(2) div:nth-of-type(2)>div:nth-of-type(2)').text())
		let specialDescr = []
		let info = []
		let actions = []
		let cost = []

		n('div.ability-background>div div:nth-of-type(2) div:nth-of-type(2)>div:nth-of-type(1) div').map((i, el) => {
			const l = cheerio.load(el)
			if (_.lowerCase(l(el).text()).split(' ')[0] && _.drop(_.lowerCase(l(el).text()).split(' ')).join(' ')) {
				info.push([
					_.lowerCase(l(el).text()).split(' ')[0],
					_.drop(_.lowerCase(l(el).text()).split(' ')).join(' ')
				])
			}
		})
		n('div.ability-background>div div:nth-of-type(3)>div:not([style])').map((i, el) => {
			actions.push([
				_.trim($(el).text()).split(':')[0],
				_.trim(_.replace(_.trim($(el).text()).split(':')[1], /\([\s\S]*?\)/, ''))
			])
		})
		n('div.ability-background>div div:nth-of-type(3)>div>span[style="position:relative; top:-2px;"]').map((i, el) => {
			if (el) {
				if (el.children[0].attribs.title === 'Cooldown') {
					cost.push(['cooldown', _.trim(_.replace($(el.parent).text(), /\([\s\S]*?\)/, ''))])
				}
				if (el.children[0].attribs.title === 'Mana') {
					cost.push(['mana', _.trim(_.replace($(el.parent).text(), /\([\s\S]*?\)/, ''))])
				}
			}
		})
		abilities.push({ name, icon, description, specialDescr, info, actions, cost })
	})



	return { name, attribute, complexity, range, rest, icon, attrIcon, miniIcon, s_base, s_gain, a_base, a_gain, i_base, i_gain, b_health, b_healthRegen, b_magicRes, b_mana, b_manaRegen, b_spellDmg, b_armor, b_attacksPerSec, b_moveSpeedAmp, b_damage, fst_health, fst_healthRegen, fst_magicRes, fst_mana, fst_manaRegen, fst_spellDmg, fst_armor, fst_attacksPerSec, fst_moveSpeedAmp, fst_damage, fth_health, fth_healthRegen, fth_magicRes, fth_mana, fth_manaRegen, fth_spellDmg, fth_armor, fth_attacksPerSec, fth_moveSpeedAmp, fth_damage, t_health, t_healthRegen, t_magicRes, t_mana, t_manaRegen, t_spellDmg, t_armor, t_attacksPerSec, t_moveSpeedAmp, t_damage, movementSpeed, attackSpeed, turnRate, visionRange, attackRange, attackAnim, baseAttackTime, abilities, tenth, fifteenth, twentieth, twentyfifth }
}

module.exports = parsingData
