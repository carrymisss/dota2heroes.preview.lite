const express = require('express')
const axios = require('axios')
const parsingData = require('./parsingData')
const app = express()
const port = 5000

app.use(express.json())

app.post('/api', (req, res) => {
   axios.get(`https://dota2.gamepedia.com${req.body.link}`).then(({data, headers}) => {

      res.json({
         name: parsingData(data).name,
         attribute: parsingData(data).attribute,
         complexity: parsingData(data).complexity,
         features: {
            range: parsingData(data).range,
            rest: parsingData(data).rest
         },
         icon: parsingData(data).icon,
         attrIcon: parsingData(data).attrIcon,
         miniIcon: parsingData(data).miniIcon,
         stats: {
            strength: {
               base: parsingData(data).s_base,
               gain: parsingData(data).s_gain
            },
            agility: {
               base: parsingData(data).a_base,
               gain: parsingData(data).a_gain
            },
            intelligence: {
               base: parsingData(data).i_base,
               gain: parsingData(data).i_gain
            }
         },
         characteristics: {
            base: {
               health: parsingData(data).b_health,
               healthRegen: parsingData(data).b_healthRegen,
               magicRes: parsingData(data).b_magicRes,
               mana: parsingData(data).b_mana,
               manaRegen: parsingData(data).b_manaRegen,
               spellDmg: parsingData(data).b_manaRegen,
               armor: parsingData(data).b_armor,
               attacksPerSec: parsingData(data).b_attacksPerSec,
               moveSpeedAmp: parsingData(data).b_moveSpeedAmp,
               damage: parsingData(data).b_moveSpeedAmp
            },
            first: {
               health: parsingData(data).fst_health,
               healthRegen: parsingData(data).fst_healthRegen,
               magicRes: parsingData(data).fst_magicRes,
               mana: parsingData(data).fst_mana,
               manaRegen: parsingData(data).fst_manaRegen,
               spellDmg: parsingData(data).fst_manaRegen,
               armor: parsingData(data).fst_armor,
               attacksPerSec: parsingData(data).fst_attacksPerSec,
               moveSpeedAmp: parsingData(data).fst_moveSpeedAmp,
               damage: parsingData(data).fst_moveSpeedAmp
            },
            fifteenth: {
               health: parsingData(data).fth_health,
               healthRegen: parsingData(data).fth_healthRegen,
               magicRes: parsingData(data).fth_magicRes,
               mana: parsingData(data).fth_mana,
               manaRegen: parsingData(data).fth_manaRegen,
               spellDmg: parsingData(data).fth_manaRegen,
               armor: parsingData(data).fth_armor,
               attacksPerSec: parsingData(data).fth_attacksPerSec,
               moveSpeedAmp: parsingData(data).fth_moveSpeedAmp,
               damage: parsingData(data).fth_moveSpeedAmp
            },
            twentyfifth: {
               health: parsingData(data).t_health,
               healthRegen: parsingData(data).t_healthRegen,
               magicRes: parsingData(data).t_magicRes,
               mana: parsingData(data).t_mana,
               manaRegen: parsingData(data).t_manaRegen,
               spellDmg: parsingData(data).t_manaRegen,
               armor: parsingData(data).t_armor,
               attacksPerSec: parsingData(data).t_attacksPerSec,
               moveSpeedAmp: parsingData(data).t_moveSpeedAmp,
               damage: parsingData(data).t_moveSpeedAmp
            },
            movementSpeed: parsingData(data).movementSpeed,
            attackSpeed: parsingData(data).attackSpeed,
            turnRate: parsingData(data).turnRate,
            visionRange: parsingData(data).visionRange,
            attackRange: parsingData(data).attackRange,
            attackAnim: parsingData(data).attackAnim,
            baseAttackTime: parsingData(data).baseAttackTime
         },
         abilities: parsingData(data).abilities,
         talentsTree: {
            tenth: parsingData(data).tenth,
            fifteenth: parsingData(data).fifteenth,
            twentieth: parsingData(data).twentieth,
            twentyfifth: parsingData(data).twentyfifth
         }
      })
   }).catch(error => {
      res.status(404).send(error)
   })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('SIGTERM', () => {
   app.listen(port).close()
})
