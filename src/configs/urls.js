const _url ='https://v3.football.api-sports.io/fixtures'

let key ="de4c322d3b3f7eb99eeea0597d0f96fb"

const leagues = {
    PremierLeague:'39'
}

const teamsSites = {
    Bournemouth:'https://www.afcb.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    Arsenal:'https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    AstonVilla:'https://www.avfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    Brentford:'https://www.brentfordfc.com/en??utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    Brighton:'https://www.brightonandhovealbion.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    Chelsea:'https://www.chelseafc.com/en??utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    CrystalPalace:'https://www.cpfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    Everton:'https://www.evertonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    Fulham:'https://www.fulhamfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    LeedsUnited:'https://www.leedsunited.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    LeicesterCity:'https://www.lcfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    Liverpool:'https://www.liverpoolfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    ManchesterCity:'https://www.mancity.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    ManchesterUnited:'https://www.manutd.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    NewcastleUnited:'https://www.nufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    NottinghamForest:'https://www.nottinghamforest.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    Southampton:'https://www.southamptonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    TottenhamHotspur:'https://www.tottenhamhotspur.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    WestHamUnited:'https://www.whufc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link',
    Wolverhampton:'https://www.wolves.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link'
}
const emblems = {
    bournemouthEmblem:'https://resources.premierleague.com/premierleague/badges/25/t91.png',
    arsenalEmblem:'https://resources.premierleague.com/premierleague/badges/25/t3.png',
    astonVillaEmblem:'https://resources.premierleague.com/premierleague/badges/25/t7.png',
    brentfordEmblem:'https://resources.premierleague.com/premierleague/badges/25/t94.png',
    brightonEmblem:'https://resources.premierleague.com/premierleague/badges/25/t36.png',
    chelseaEmblem:'https://resources.premierleague.com/premierleague/badges/25/t8.png',
    crystalPalaceEmblem:'https://resources.premierleague.com/premierleague/badges/25/t31.png',
    evertonEmblem:'https://resources.premierleague.com/premierleague/badges/25/t11.png',
    fulhamEmblem:'https://resources.premierleague.com/premierleague/badges/25/t54.png',
    leedsUnitedEmblem:'https://resources.premierleague.com/premierleague/badges/25/t2.png',
    leicesterCityEmblem:'https://resources.premierleague.com/premierleague/badges/25/t13.png',
    liverpoolEmblem:'https://resources.premierleague.com/premierleague/badges/25/t14.png',
    manchesterCityEmblem:'https://resources.premierleague.com/premierleague/badges/25/t43.png',
    manchesterUnitedEmblem:'https://resources.premierleague.com/premierleague/badges/25/t1.png',
    newcastleUnitedEmblem:'https://resources.premierleague.com/premierleague/badges/25/t4.png',
    nottinghamForestEmblem:'https://resources.premierleague.com/premierleague/badges/25/t17.png',
    southamptonEmblem:'https://resources.premierleague.com/premierleague/badges/25/t20.png',
    tottenhamHotspurEmblem:'https://resources.premierleague.com/premierleague/badges/25/t6.png',
    westHamUnitedEmblem:'https://resources.premierleague.com/premierleague/badges/25/t21.png',
    wolverhamptonEmblem:'https://resources.premierleague.com/premierleague/badges/25/t39.png'
}

export {key,_url,leagues,teamsSites,emblems}