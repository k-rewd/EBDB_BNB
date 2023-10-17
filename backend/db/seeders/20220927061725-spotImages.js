'use strict';

const { User, Booking, Spot, ReviewImage, Review, SpotImage } = require('../models')


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('SpotImages',[
      {
        spotId: 1,
        url: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/03/counter-strike-2-maps-dust-2.jpg',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://img-cdn.hltv.org/gallerypicture/Dx76y_YCTurGJhGimXdJ6n.png?ixlib=java-2.1.0&w=1200&s=49a4994bb2c88d549ca93df211b99882',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://static.wikia.nocookie.net/cswikia/images/1/16/Cs2_dust2.png',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://img-cdn.hltv.org/gallerypicture/ncmYPPRyniNjnu9eldOsEk.jpg?ixlib=java-2.1.0&w=1200&s=e0ac5abdf11c686f17d83566fae2115d',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://cslabez.com/wp-content/uploads/2023/03/CS2-Counter-strike-2-Dust-2-Upper-Tunnels-1920x1080.jpg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://i.redd.it/5m092ysgk5851.jpg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://1.bp.blogspot.com/-sjV95UueIRQ/T6-Ie-pQoOI/AAAAAAAABes/wLd7rzyujvo/s1600/tumblr_m3uesneuXZ1qf20ovo1_1280.jpg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://static.wikia.nocookie.net/community-sitcom/images/8/86/6x1_Ladders_class.jpg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://static.wikia.nocookie.net/community-sitcom/images/8/86/6x1_Ladders_class.jpg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://static.wikia.nocookie.net/community-sitcom/images/e/ed/Abeds_dorm_room.png',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://www.ggrecon.com/media/4yydavjk/cs2-mirage-palace.jpg?mode=crop&width=682&quality=80&format=webp',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://media.moddb.com/images/downloads/1/249/248576/A.png',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://pbs.twimg.com/media/BMGrT_XCEAArEX6.jpg:large',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://cslabez.com/wp-content/uploads/2023/03/CS2-Counter-strike-2-Mirage-Palace-1920x1080.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/718664200975317143/E612A317C39D61DDC45F7D0B6A1097B05168BA68/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://escorenews.com/media/news/pic-20230630-1920x1080-8969507972.png',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://dotesports.com/wp-content/uploads/2023/06/Inferno-CS2.png',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://i.redd.it/new-cs2-inferno-v0-88geic50329b1.png?width=1920&format=png&auto=webp&s=56d796f92f29b5539735e4ff5edf60a124424083',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://i.redd.it/new-cs2-inferno-v0-kzjcd0n2329b1.png?width=1920&format=png&auto=webp&s=189004a38892419b058594fcc952d3d933748f4a',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://dotesports.com/wp-content/uploads/2023/05/Inferno-CSGO.jpg',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://static.wikia.nocookie.net/cswikia/images/5/5c/De_ancient_cs2.png',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://files.bo3.gg/uploads/news/7998/title_image/960x480-fc333a9313e6980bcb1a1042d64ac334.webp',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://preview.redd.it/now-that-ancient-is-sunny-in-cs2-it-will-become-a-rather-v0-2bm0ecy63fra1.jpg?width=640&crop=smart&auto=webp&s=7f2d22c01884db001c58561313fc96fcee70c676',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://img-cdn.hltv.org/gallerypicture/1bLOIuw0SIF3ahrnk51PLU.jpg?ixlib=java-2.1.0&w=1200&s=86e55871846397630b0ee6dcb47ca561',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://i.redd.it/feedback-its-good-that-the-dark-areas-are-brighter-in-cs2-v0-1vb3x9wx29qb1.jpg?width=1920&format=pjpg&auto=webp&s=db55be4965be11c0aa9f0e49cd26c19944bb8b39',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://i.ytimg.com/vi/KUcwNtpOR4g/maxresdefault.jpg',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://admin.esports.gg/wp-content/uploads/2023/07/Overpass-Featured-Image-1568x882.jpeg',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://cslabez.com/wp-content/uploads/2023/03/CS2-Counter-strike-2-Overpass-Monster.jpg',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://preview.redd.it/will-t3-rework-maps-like-overpass-create-the-same-situation-v0-kcl2jzy7sq8b1.jpg?width=640&crop=smart&auto=webp&s=592e96b815a649ac6ad349ecc24c6ebfc885f483',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://i.redd.it/will-t3-rework-maps-like-overpass-create-the-same-situation-v0-f6k4hyy7sq8b1.jpg?width=1920&format=pjpg&auto=webp&s=8b550d4ac859e19f7f8738f8adc83aeba780cbe4',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://preview.redd.it/overpass-and-vertigo-maps-updated-in-cs2-v0-u0hc6e6vhocb1.jpg?width=640&crop=smart&auto=webp&s=83ecc8c8ef5e0896b36c69c1610d1f26f54c79f7',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://cs.money/blog/wp-content/uploads/sites/2/2023/07/vertigo.jpg',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://staticg.sportskeeda.com/editor/2023/07/e2f03-16896634233373-1920.jpg?w=840',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://res.cloudinary.com/pley-gg/image/upload/c_fill/v1/Maps/Maps%20guide/Vertigo_druqiy',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://esport1.hu/images/64b67181a3dc9_64b67181a3d78-ilyen-lesz-vertigo-a-cs2-ben.jpg',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://escorenews.com/media/news/pic-20230630-1536x864-2159679631.png',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://i.redd.it/rumour-has-it-that-nuke-will-be-the-next-map-featured-in-v0-k1zl0ecn9j8b1.jpg?width=1920&format=pjpg&auto=webp&s=8468c3450bd1e9dfcca2b8a2ebdc790dc84c4d08',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://dotesports.com/wp-content/uploads/2023/09/Nuke-Ramp-toward-radio-room-side-1.png',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://win.gg/_next/image/?url=https%3A%2F%2Fapi.win.gg%2Fwp-content%2Fuploads%2F2022%2F06%2Fsmall_lowerbomb_006_new.jpg&w=1920&q=75',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://gumlet.assettype.com/afkgaming%2F2022-07%2F5ddd7d96-0261-4f32-9593-05aec2d30206%2FCover_Image___CSGO_Map__de_nirage__Goes_Viral___Designed_Like_Mirage_But_Based_On_Nuke.jpg?compress=true&dpr=1&w=1200',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://cdn.sanity.io/images/ccckgjf9/production/0358fabbe5a604004cd0373f2a1f9694400747db-1920x1080.jpg?max-h=1080&max-w=1920&fit=scale&auto=format',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://cdn.sanity.io/images/ccckgjf9/production/0358fabbe5a604004cd0373f2a1f9694400747db-1920x1080.jpg?max-h=1080&max-w=1920&fit=scale&auto=format',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://cdn.sanity.io/images/ccckgjf9/production/0358fabbe5a604004cd0373f2a1f9694400747db-1920x1080.jpg?max-h=1080&max-w=1920&fit=scale&auto=format',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://cdn.sanity.io/images/ccckgjf9/production/0358fabbe5a604004cd0373f2a1f9694400747db-1920x1080.jpg?max-h=1080&max-w=1920&fit=scale&auto=format',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://cdn.sanity.io/images/ccckgjf9/production/0358fabbe5a604004cd0373f2a1f9694400747db-1920x1080.jpg?max-h=1080&max-w=1920&fit=scale&auto=format',
        preview: true
      },
      
      {
        spotId: 10,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/630790563184769795/723A63B5549B79F3A89233615F7F5E32AD4F858B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://www.mapcore.org/uploads/monthly_2015_06/agency_interior01-1024x640.jpg.d39f4a66222c9c3fdf5938ad08f3b407.jpg',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/929299704287950269/F67A10BA971351FA82C65BC96191437C25A9734C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://www.mapcore.org/uploads/monthly_2015_06/agency_outside_after-1024x576.jpg.7a0ade24d67a6f1c34edc0c312132d0e.jpg',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/630790563184769268/F529C8B07A3556BB4C88BA81F2ACBF61A98389A5/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://static.wikia.nocookie.net/cswikia/images/a/aa/Cs2_italy.png',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://static2.cs-bg.net/maps/images/screenshots/mapsgo/cs/csgo-44-cs_italy.jpg',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://www.theloadout.com/wp-content/sites/theloadout/2021/04/csgo-italy-removed-market.jpeg',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://img-cdn.hltv.org/gallerypicture/FoTnUObZfRl52l7evaEtCV.png?auto=compress&ixlib=java-2.1.0&q=75&w=800&s=ad2f23390c98e5575e983ffa40d2b821',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://i.pinimg.com/736x/28/47/81/284781cc2c1de2ae79d413f77d2d3331.jpg',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://static.wikia.nocookie.net/cswikia/images/1/14/De_canals_cs2.jpg',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://assetsio.reedpopcdn.com/csgo_canals_map-1.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://assets.change.org/photos/7/hd/vl/rghDVlDgFLfnOxM-1600x900-noPad.jpg?1539178250',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://steamcdn-a.akamaihd.net/apps/csgo/blog/images/march15/canals03_A.jpg',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://steamcdn-a.akamaihd.net/apps/csgo/blog/images/march15/canals01_CT.jpg',
        preview: true
      },

      {
        spotId: 13,
        url: 'https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/07/Cache-A-Bomb-Site-1024x575.jpg',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://cache.fmpone.com/img/3@2x.jpg',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://cache.fmpone.com/img/2@2x.jpg',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://cache.fmpone.com/img/5@2x.jpg',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://dotesports.com/wp-content/uploads/2019/04/11122025/cacherework.jpg',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://images.prismic.io/rivalryglhf%2F8c3c898c-9a9e-4c2f-9339-fdeda9a85d26_csgo-de-cbble.png?auto=compress,format',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://s2-techtudo.glbimg.com/SaSEEzkFXH5qY-IETeipt5BudkQ=/0x0:747x420/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/2/O/HoAr6jTsaUNgIf67TIFg/cbble-comp11.png',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://liquipedia.net/commons/images/thumb/b/b4/Csgo_cobblestone.jpg/600px-Csgo_cobblestone.jpg',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/05/csgo-cobblestone-map-mod-outside-550x309.jpg',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://cdn0.gamesports.net/content_teasers/139000/139533.jpg?1649326226',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/613893641219002211/F19A760F9FD59AD5591DC881E10332BCF5BCF663/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/613893641218932120/C2F3D8694832E10C40C0E99E12505F3E75CC5703/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/613893641218994718/1DAEA773380B90877C3B768A94FFF2ADED7CECD3/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/613893641218989665/88F0B7184DBF3C6D1E64F3767117BDAE0B2EA288/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://cdnb.artstation.com/p/assets/images/images/045/072/473/large/tyler-teschke-screenshot04.jpg?1641854358',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://static.wikia.nocookie.net/cswikia/images/c/cd/Csgo-santorini-workshop.jpg',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://i.redd.it/wxn0q4aqrbf21.jpg',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://static.wikia.nocookie.net/cso/images/d/d5/1373964555_de_santorini_02.jpg/revision/latest/scale-to-width-down/1200?cb=20130718140355',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/492393550291305420/84878159AEB039B29EE3614A2570420B407B37D6/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/492393550291305611/FDEE532D99D15A8E23D55DCB7DC3ED0BA124CD4E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/761600337161181619/713885D9EAD47D91A3D765855F08A666FF0ED4B2/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/761600337161185731/82763B70829980CD1FB156D84CF58FFE0B3D5244/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/764977204063010263/BFDC045DADB88ADFB26386F252F3B058F3ADEF45/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/761600337161186969/D0575AD249BE7BE681F01C40DF31B331D9F58EE5/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://images.gamebanana.com/img/ss/mods/532d16b4aa592.jpg',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/858348104640469357/155266B3F6D1D25DBE2AC0E34EA282815C5AFF7E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/858348104640480292/83F1B8DF194C020655D7C1FE9A6FB94630F629DD/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/858348104640470207/C54C4BDA068F2BEFB3A49E83529C621B2E4C5890/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/858348104640476388/0F874B902FAD1FF0A858BAD2FD55FD83ADB2B5BE/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://steamuserimages-a.akamaihd.net/ugc/858348104640477210/1A38C962D9FCA1320821C2C3363B7DA678013093/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        preview: true
      }
      
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SpotImages', null, {})
  }
};
