
// ==================== CONFIG ====================
const SERIES = [
    { name: '🎵 Entertainment & Music', color: '#10b981', base: 34, desc: 'All the trends, dances, skits, and new songs.', children: [
        { name: 'Music & Artists', color: '#065f46', base: 25, desc: 'Israeli artists, genres, and the live music scene.', children: [
            { name: 'Israeli Pop & Mainstream', color: '#064e3b', base: 25, desc: 'Chart-topping Israeli pop and streaming hits.', children: [
                { name: 'Israeli pop is flooding streaming charts this summer',                  color: '#064e3b', base: 22 },
                { name: 'Female artists dominate Israeli mainstream right now',                  color: '#065f46', base: 20 },
                { name: 'A breakout album is reshaping local mainstream taste',                  color: '#047857', base: 20 },
                { name: 'Israeli music exports are reaching global audiences',                   color: '#059669', base: 20 },
                { name: 'Genre fusion is pulling Israeli pop in new directions',                 color: '#10b981', base: 18 },
            ]},
            { name: 'Mizrahi & Ethnic Music', color: '#047857', base: 25, desc: 'Mizrahi, ethnic, and fusion sound trends.', children: [
                { name: 'Mizrahi music has taken over the charts completely',                    color: '#064e3b', base: 22 },
                { name: 'Second-generation artists are reinventing Mizrahi sound',              color: '#065f46', base: 20 },
                { name: 'Ethnic fusion blends Mizrahi with African and Arab beats',             color: '#047857', base: 20 },
                { name: 'Mizrahi artists are the highest-paid in Israeli music',                color: '#059669', base: 20 },
                { name: 'The establishment still gatekeeps Mizrahi from prime slots',            color: '#10b981', base: 18 },
            ]},
            { name: 'Rap & Hip-Hop', color: '#059669', base: 20, desc: 'Israeli rap, trap beats, and hip-hop culture.', children: [
                { name: 'Israeli rap has entered the global conversation officially',            color: '#064e3b', base: 22 },
                { name: 'Political bars are the most shared hip-hop content now',               color: '#065f46', base: 20 },
                { name: 'Young rappers from the periphery are breaking through',                color: '#047857', base: 20 },
                { name: 'Hebrew bars hit harder than English in Israeli youth culture',          color: '#059669', base: 20 },
                { name: 'Trap beats from Hadera and Petah Tikva are going viral',               color: '#10b981', base: 18 },
            ]},
            { name: 'International Trends', color: '#10b981', base: 15, desc: 'Global pop, K-pop, and Latin music in Israel.', children: [
                { name: 'Global pop charts are flooding Israeli TikTok feeds',                  color: '#064e3b', base: 22 },
                { name: 'K-pop fandoms are among the most active in Israeli TikTok',            color: '#065f46', base: 20 },
                { name: 'Latin music is outpacing American pop with Israeli youth',             color: '#047857', base: 20 },
                { name: 'British indie artists are finding unexpected Israeli followings',       color: '#059669', base: 20 },
                { name: 'International music trends reach Israel within 24 hours',              color: '#10b981', base: 18 },
            ]},
            { name: 'Live Music & Festivals', color: '#064e3b', base: 15, desc: 'Festivals, concerts, and live event culture.', children: [
                { name: 'Summer festival season is the most anticipated event of 2026',         color: '#064e3b', base: 22 },
                { name: 'Festival ticket prices are outpacing inflation by three times',        color: '#065f46', base: 20 },
                { name: 'Major headliners cancelled Israel dates under international pressure',  color: '#047857', base: 20 },
                { name: 'Local artists fill headline slots left vacant by cancellations',        color: '#059669', base: 20 },
                { name: 'Arena concerts sell out in minutes despite economic downturn',         color: '#10b981', base: 18 },
            ]},
        ]},
        { name: 'Comedy & Humor', color: '#047857', base: 23, desc: 'Sketches, satire, pranks, and stand-up clips.', children: [
            { name: 'Daily Life & Relatable', color: '#064e3b', base: 25, desc: 'Army, supermarket, and everyday life humor.', children: [
                { name: 'Israeli daily life humor is the most shared comedy format',            color: '#064e3b', base: 22 },
                { name: 'Army service sketches resonate with every Israeli under 40',           color: '#065f46', base: 20 },
                { name: 'Supermarket price jokes are relatable across all demographics',        color: '#047857', base: 20 },
                { name: 'Sabra character tropes never run out of comedic appeal',               color: '#059669', base: 20 },
                { name: 'Work from home humor is still dominating the comedy scene',            color: '#10b981', base: 18 },
            ]},
            { name: 'Political Satire', color: '#065f46', base: 20, desc: 'PM impressions, reform jokes, and viral parodies.', children: [
                { name: 'Political satire is sharper than ever on Israeli TikTok',             color: '#064e3b', base: 22 },
                { name: 'Netanyahu impressions are the most viewed comedy content',            color: '#065f46', base: 20 },
                { name: 'Judicial reform jokes outlived the crisis that spawned them',          color: '#047857', base: 20 },
                { name: 'Every minister gets a viral parody within days of a gaffe',            color: '#059669', base: 20 },
                { name: 'Satire accounts are growing faster than news accounts',                color: '#10b981', base: 18 },
            ]},
            { name: 'Character & Impersonation', color: '#047857', base: 20, desc: 'Recurring personas and cultural archetypes.', children: [
                { name: 'Recurring comedy personas dominate Israeli TikTok mainstream',         color: '#064e3b', base: 22 },
                { name: 'Creator characters build loyal audiences over many months',            color: '#065f46', base: 20 },
                { name: 'Cultural archetypes make the best comedy templates available',         color: '#047857', base: 20 },
                { name: 'Character-based comedy outlasts news reaction content easily',         color: '#059669', base: 20 },
                { name: 'Audience participation keeps character series alive for years',        color: '#10b981', base: 18 },
            ]},
            { name: 'Prank & Reaction', color: '#059669', base: 20, desc: 'Hidden cameras, reactions, and challenge videos.', children: [
                { name: 'Hidden camera pranks generate the highest comedy engagement',          color: '#064e3b', base: 22 },
                { name: 'Reaction videos to viral news clips dominate the genre now',           color: '#065f46', base: 20 },
                { name: 'Public pranks face backlash for crossing community norms',             color: '#047857', base: 20 },
                { name: 'Challenge reactions are replacing planned pranks entirely',            color: '#059669', base: 20 },
                { name: 'Unscripted reactions consistently outperform staged content',          color: '#10b981', base: 18 },
            ]},
            { name: 'Stand-Up Clips', color: '#10b981', base: 15, desc: 'Viral stand-up moments and emerging comedians.', children: [
                { name: 'Stand-up clips are the most shared long-form comedy content',          color: '#064e3b', base: 22 },
                { name: 'New comedians break through on TikTok before any live stage',          color: '#065f46', base: 20 },
                { name: 'War-related material is the most controversial comedy topic',          color: '#047857', base: 20 },
                { name: 'Female comedians are gaining ground in Israeli stand-up scene',        color: '#059669', base: 20 },
                { name: 'Stand-up tours sell out on the strength of viral TikTok clips',        color: '#10b981', base: 18 },
            ]},
        ]},
        { name: 'Dance Culture', color: '#064e3b', base: 22, desc: 'Viral dances, tutorials, and cultural choreography.', children: [
            { name: 'TikTok Original Trends', color: '#064e3b', base: 25, desc: 'Weekly viral dance formats born on TikTok.', children: [
                { name: 'A new dance format goes viral every week in Israel',                   color: '#064e3b', base: 22 },
                { name: 'Israeli versions of global trends consistently outperform originals',  color: '#065f46', base: 20 },
                { name: 'Military personnel filming dances is a persistent viral genre',        color: '#047857', base: 20 },
                { name: 'Dance trends cycle faster than any other content format',              color: '#059669', base: 20 },
                { name: 'Israeli youth absorb and remix global trends within hours',            color: '#10b981', base: 18 },
            ]},
            { name: 'Choreography & Tutorials', color: '#065f46', base: 20, desc: 'Step-by-step dance tutorials and routines.', children: [
                { name: 'Tutorial creators teaching viral dances hit millions of views',        color: '#064e3b', base: 22 },
                { name: 'Amateur tutorials outperform professional choreography content',       color: '#065f46', base: 20 },
                { name: 'Step-by-step tutorials outperform performance videos consistently',    color: '#047857', base: 20 },
                { name: 'Israeli choreography is gaining global recognition on TikTok',         color: '#059669', base: 20 },
                { name: 'Dance schools are gaining students through TikTok exposure',           color: '#10b981', base: 18 },
            ]},
            { name: 'Cultural & Ethnic Dances', color: '#047857', base: 20, desc: 'Yemenite, Ethiopian, hora, and fusion dances.', children: [
                { name: 'Yemenite and Ethiopian dance traditions are viral on TikTok',          color: '#064e3b', base: 22 },
                { name: 'Hora and folk dances are experiencing a cultural revival',             color: '#065f46', base: 20 },
                { name: 'Diaspora communities are rediscovering Israeli dances abroad',         color: '#047857', base: 20 },
                { name: 'Cultural dance content bridges gaps between Israeli communities',       color: '#059669', base: 20 },
                { name: 'Arab-Israeli fusion dance is one of the most shared formats',          color: '#10b981', base: 18 },
            ]},
            { name: 'Celebrity Dances', color: '#059669', base: 20, desc: 'Athletes, politicians, and stars joining trends.', children: [
                { name: 'Celebrity participation in dance trends drives massive engagement',     color: '#064e3b', base: 22 },
                { name: 'Athlete dance clips go more viral than sports highlights',             color: '#065f46', base: 20 },
                { name: 'Politicians who dance on TikTok gain unexpected youth appeal',         color: '#047857', base: 20 },
                { name: 'Celebrity failures at dances outperform success attempts',             color: '#059669', base: 20 },
                { name: 'Singer dance challenges generate more views than music videos',        color: '#10b981', base: 18 },
            ]},
            { name: 'Challenge Compilations', color: '#10b981', base: 15, desc: 'Best-of and fail compilations from challenges.', children: [
                { name: 'Compilation videos of challenge attempts dominate For You pages',      color: '#064e3b', base: 22 },
                { name: 'Failed challenge compilations get more views than successes',          color: '#065f46', base: 20 },
                { name: 'Charity-linked challenges have the highest participation rates',       color: '#047857', base: 20 },
                { name: 'School and IDF challenges set the standard for viral formats',         color: '#059669', base: 20 },
                { name: 'Challenge creators are the most consistently followed accounts',       color: '#10b981', base: 18 },
            ]},
        ]},
        { name: 'Drama & Reality', color: '#059669', base: 15, desc: 'Influencer drama, reality TV, and personal stories.', children: [
            { name: 'Influencer Drama', color: '#064e3b', base: 25, desc: 'Creator feuds, cancellations, and apology videos.', children: [
                { name: 'Influencer feuds generate more engagement than any other drama',       color: '#064e3b', base: 22 },
                { name: 'Cancel culture reaches Israeli TikTok with a 6-month delay',          color: '#065f46', base: 20 },
                { name: 'Top influencers lose followers faster than they gain them now',        color: '#047857', base: 20 },
                { name: 'Influencer apology videos are among the most viewed content',         color: '#059669', base: 20 },
                { name: 'Brand sponsorship scandals overshadow creative content regularly',     color: '#10b981', base: 18 },
            ]},
            { name: 'Reality TV Moments', color: '#065f46', base: 20, desc: 'Cooking shows, competitions, and behind-the-scenes.', children: [
                { name: 'Israeli reality TV clip sharing is at an all-time high',               color: '#064e3b', base: 22 },
                { name: 'Cooking competition clips dominate prime time TikTok feeds',           color: '#065f46', base: 20 },
                { name: 'Reality TV contestants become TikTok stars before episodes air',       color: '#047857', base: 20 },
                { name: 'Audience manipulation in reality TV is now openly discussed',          color: '#059669', base: 20 },
                { name: 'Reality TV is losing credibility with the 18-24 demographic',         color: '#10b981', base: 18 },
            ]},
            { name: 'Celebrity Gossip', color: '#047857', base: 20, desc: 'Breakups, scandals, and celebrity relationship news.', children: [
                { name: 'Celebrity relationship news generates peak engagement spikes',         color: '#064e3b', base: 22 },
                { name: 'Israeli celebrity breakups trend faster than any political event',     color: '#065f46', base: 20 },
                { name: 'Israeli celebrity gossip pages grow faster than news accounts',        color: '#047857', base: 20 },
                { name: 'Public figures live under constant social media scrutiny now',         color: '#059669', base: 20 },
                { name: 'Celebrity-adjacent drama spills from Instagram to TikTok daily',      color: '#10b981', base: 18 },
            ]},
            { name: 'Personal Stories', color: '#059669', base: 20, desc: 'Confessions, mental health, and identity stories.', children: [
                { name: 'Personal confession content gets the deepest engagement',              color: '#064e3b', base: 22 },
                { name: 'Mental health stories are the most reshared personal content',        color: '#065f46', base: 20 },
                { name: 'Immigration and identity stories resonate across generations',         color: '#047857', base: 20 },
                { name: 'Wartime personal stories are reshaping what drama content means',      color: '#059669', base: 20 },
                { name: 'Authentic unedited moments outperform produced content consistently',  color: '#10b981', base: 18 },
            ]},
            { name: 'Online Feuds', color: '#10b981', base: 15, desc: 'Creator beef, audience sides, and reconciliation arcs.', children: [
                { name: 'Online beef between creators is the most watched drama genre',         color: '#064e3b', base: 22 },
                { name: 'TikTok feuds spill into real life more than any other platform',       color: '#065f46', base: 20 },
                { name: 'Audience sides form within minutes on every creator conflict',         color: '#047857', base: 20 },
                { name: 'Feuds between political content creators draw massive views',          color: '#059669', base: 20 },
                { name: 'Reconciliation content after feuds peaks higher than the feud itself', color: '#10b981', base: 18 },
            ]},
        ]},
        { name: 'Memes & Viral', color: '#10b981', base: 15, desc: 'Templates, culture memes, animals, and nostalgia.', children: [
            { name: 'Trending Templates', color: '#064e3b', base: 25, desc: 'Global meme formats adapted for Israeli context.', children: [
                { name: 'Meme templates spread from global to Israeli TikTok within hours',     color: '#064e3b', base: 22 },
                { name: 'The most shared templates are always tied to political events',        color: '#065f46', base: 20 },
                { name: 'Israeli meme culture adapts international formats uniquely',           color: '#047857', base: 20 },
                { name: 'Template longevity has dropped from weeks to days in 2026',            color: '#059669', base: 20 },
                { name: 'The same template serves completely opposite political sides',         color: '#10b981', base: 18 },
            ]},
            { name: 'Israeli Culture Memes', color: '#065f46', base: 20, desc: 'Army, Ashkenazi-Mizrahi, and TLV-Jerusalem memes.', children: [
                { name: 'Israeli-specific memes are impenetrable to foreign audiences',         color: '#064e3b', base: 22 },
                { name: 'Army references remain the dominant theme of Israeli meme culture',    color: '#065f46', base: 20 },
                { name: 'Ashkenazi vs Mizrahi dynamics are the richest meme territory',         color: '#047857', base: 20 },
                { name: 'Tel Aviv vs Jerusalem content generates the most engagement',          color: '#059669', base: 20 },
                { name: 'Sabra character memes outlive every trend they originated in',         color: '#10b981', base: 18 },
            ]},
            { name: 'Wholesome & Animals', color: '#047857', base: 20, desc: 'Pet videos, rescues, and heartwarming moments.', children: [
                { name: 'Animal videos provide the safest engagement on Israeli TikTok',        color: '#064e3b', base: 22 },
                { name: 'Heartwarming human moments perform best during security crises',       color: '#065f46', base: 20 },
                { name: 'Pet content creates the most loyal long-term fandoms online',          color: '#047857', base: 20 },
                { name: 'Animal rescue stories are the most viral wholesome content',           color: '#059669', base: 20 },
                { name: 'Wholesome content engagement spikes during military operations',       color: '#10b981', base: 18 },
            ]},
            { name: 'Nostalgic Content', color: '#059669', base: 20, desc: '90s throwbacks, old TV shows, and retro aesthetics.', children: [
                { name: '90s Israeli culture nostalgia drives massive engagement',              color: '#064e3b', base: 22 },
                { name: 'Throwback content peaks during wartime and national uncertainty',      color: '#065f46', base: 20 },
                { name: 'Old TV shows and songs outperform new content during crises',          color: '#047857', base: 20 },
                { name: 'Generational nostalgia bridges young and old Israeli audiences',       color: '#059669', base: 20 },
                { name: 'Retro aesthetics are the dominant visual trend in 2026',               color: '#10b981', base: 18 },
            ]},
            { name: 'Shock & Surprise', color: '#10b981', base: 15, desc: 'Unexpected viral moments and accidental content.', children: [
                { name: 'Unexpected viral moments become memes before the day ends',            color: '#064e3b', base: 22 },
                { name: 'Surprise content consistently outperforms planned productions',        color: '#065f46', base: 20 },
                { name: 'Shocking news moments are repurposed as meme templates instantly',     color: '#047857', base: 20 },
                { name: 'The most viral Israeli content is always accidental not planned',      color: '#059669', base: 20 },
                { name: 'Surprise collaborations between feuding creators peak viral instantly', color: '#10b981', base: 18 },
            ]},
        ]},
    ]},
    { name: '🍽️ Lifestyle & Food', color: '#f59e0b', base: 23, desc: 'Fashion, beauty, design, recipes, and restaurants.', children: [
        { name: 'Fashion & Beauty', color: '#78350f', base: 25, desc: 'Seasonal trends, makeup, skincare, and designers.', children: [
            { name: 'Seasonal Trends & Hauls', color: '#78350f', base: 25, desc: 'Summer fashion, modest wear, and haul videos.', children: [
                { name: 'Summer 2026 fashion is defined by wartime practicality',               color: '#78350f', base: 22 },
                { name: 'Israeli style is shifting from American toward European influence',     color: '#92400e', base: 20 },
                { name: 'Modest fashion is the fastest growing trend in 2026',                  color: '#b45309', base: 20 },
                { name: 'Second-hand fashion has overtaken fast fashion among under-25s',       color: '#d97706', base: 20 },
                { name: 'Wartime aesthetics are influencing civilian fashion choices',           color: '#f59e0b', base: 18 },
            ]},
            { name: 'Makeup & Skincare', color: '#92400e', base: 25, desc: 'Natural looks, skincare routines, and product tips.', children: [
                { name: 'Skincare-first culture has replaced heavy makeup as the beauty ideal',  color: '#78350f', base: 22 },
                { name: 'Natural look tutorials dominate Israeli beauty content now',            color: '#92400e', base: 20 },
                { name: 'Local Israeli beauty brands are outperforming global brands',           color: '#b45309', base: 20 },
                { name: "Men's grooming content is the fastest growing beauty subcategory",      color: '#d97706', base: 20 },
                { name: 'Dermatologist accounts are replacing beauty influencer trust',          color: '#f59e0b', base: 18 },
            ]},
            { name: 'Sustainable Fashion', color: '#b45309', base: 20, desc: 'Thrift shopping, DIY clothing, and slow fashion.', children: [
                { name: 'Thrift shopping is now mainstream not alternative in Israel',           color: '#78350f', base: 22 },
                { name: 'Fast fashion backlash is reshaping Israeli shopping habits',            color: '#92400e', base: 20 },
                { name: 'DIY clothing content is surging in response to rising prices',          color: '#b45309', base: 20 },
                { name: 'Clothing swaps are replacing purchases for the under-30 demographic',   color: '#d97706', base: 20 },
                { name: 'Israeli consumers are buying significantly less clothing than before',   color: '#f59e0b', base: 18 },
            ]},
            { name: 'Israeli Designers', color: '#d97706', base: 15, desc: 'Local brands reaching international fashion stages.', children: [
                { name: 'Israeli designers are reaching international fashion weeks',            color: '#78350f', base: 22 },
                { name: 'Local craftsmanship is experiencing a commercial revival',              color: '#92400e', base: 20 },
                { name: 'Beersheba and Haifa designers challenge Tel Aviv fashion dominance',     color: '#b45309', base: 20 },
                { name: 'Israeli military aesthetic inspires civilian fashion globally',          color: '#d97706', base: 20 },
                { name: 'Young Israeli designers are building global audiences on TikTok',       color: '#f59e0b', base: 18 },
            ]},
            { name: 'Product Reviews', color: '#f59e0b', base: 15, desc: 'Honest reviews, dupes, and product comparisons.', children: [
                { name: 'Honest negative reviews get more engagement than positive ones',        color: '#78350f', base: 22 },
                { name: 'Non-influencer skincare reviews outperform paid content consistently',  color: '#92400e', base: 20 },
                { name: 'Israeli consumers are more skeptical of sponsored content than ever',   color: '#b45309', base: 20 },
                { name: 'Product dupes and alternatives dominate review content',                color: '#d97706', base: 20 },
                { name: 'Health and safety product testing is the most trusted review format',   color: '#f59e0b', base: 18 },
            ]},
        ]},
        { name: 'Food & Restaurants', color: '#92400e', base: 25, desc: 'Restaurant reviews, home cooking, and street food.', children: [
            { name: 'Restaurant Scene', color: '#78350f', base: 25, desc: 'Tel Aviv dining, closures, and chef spotlights.', children: [
                { name: 'Tel Aviv restaurant culture is surviving wartime against all odds',     color: '#78350f', base: 22 },
                { name: 'Discount dining and happy hour culture is exploding in Israel',         color: '#92400e', base: 20 },
                { name: 'Independent restaurants are closing faster than new ones open',         color: '#b45309', base: 20 },
                { name: 'Food delivery culture has permanently displaced restaurant dining',      color: '#d97706', base: 20 },
                { name: 'Israeli chefs are receiving international recognition despite the conflict', color: '#f59e0b', base: 18 },
            ]},
            { name: 'Home Cooking', color: '#92400e', base: 25, desc: 'Shabbat recipes, budget meals, and grandma classics.', children: [
                { name: 'Home cooking content outpaced restaurant reviews in 2026',              color: '#78350f', base: 22 },
                { name: 'Traditional Shabbat meal recipes are trending among young Israelis',    color: '#92400e', base: 20 },
                { name: 'Wartime simplicity is bringing back classic home cooking',              color: '#b45309', base: 20 },
                { name: 'Budget cooking content is the fastest growing food category',           color: '#d97706', base: 20 },
                { name: "Grandmothers' recipes go viral when grandchildren share them",          color: '#f59e0b', base: 18 },
            ]},
            { name: 'Street Food', color: '#b45309', base: 20, desc: 'Hummus bars, night markets, and Arab-Israeli cuisine.', children: [
                { name: 'Street food culture is thriving while restaurant dining struggles',     color: '#78350f', base: 22 },
                { name: 'Hummus bar culture is a pillar of Israeli street identity',             color: '#92400e', base: 20 },
                { name: 'Night markets are the most documented food experience on TikTok',       color: '#b45309', base: 20 },
                { name: 'Arab-Israeli street food is the most celebrated cuisine on TikTok',    color: '#d97706', base: 20 },
                { name: 'Peripheral city food scenes are outshining Tel Aviv on social media',   color: '#f59e0b', base: 18 },
            ]},
            { name: 'Food Challenges', color: '#d97706', base: 15, desc: 'Extreme eating, spicy tests, and viral food dares.', children: [
                { name: 'Extreme eating challenges are the most viral food content format',      color: '#78350f', base: 22 },
                { name: 'Israeli food challenges blend local dishes with international formats',  color: '#92400e', base: 20 },
                { name: 'Spicy food challenges are the dominant challenge format in 2026',       color: '#b45309', base: 20 },
                { name: 'Food challenge creators build audiences faster than cooking channels',   color: '#d97706', base: 20 },
                { name: 'Competitive eating culture is entering Israeli mainstream entertainment', color: '#f59e0b', base: 18 },
            ]},
            { name: 'Health & Diet Culture', color: '#f59e0b', base: 15, desc: 'Intuitive eating, veganism, and diet debates.', children: [
                { name: 'Diet culture is being replaced by intuitive eating discourse',          color: '#78350f', base: 22 },
                { name: 'Veganism has plateaued while flexitarianism surges among Israelis',    color: '#92400e', base: 20 },
                { name: 'Nutritionist content is more trusted than fitness influencer content',  color: '#b45309', base: 20 },
                { name: 'Wartime stress is driving comfort food culture over diet culture',      color: '#d97706', base: 20 },
                { name: 'Israeli dietary habits have shifted measurably during wartime',         color: '#f59e0b', base: 18 },
            ]},
        ]},
        { name: 'Home & Design', color: '#b45309', base: 20, desc: 'Apartments, smart home, DIY, and shelter prep.', children: [
            { name: 'Apartment & Interior', color: '#78350f', base: 25, desc: 'Small-space living, budget makeovers, and decor.', children: [
                { name: 'Budget makeover content is the most watched home design format',        color: '#78350f', base: 22 },
                { name: 'Small apartment living defines the aesthetic reality for most Israelis', color: '#92400e', base: 20 },
                { name: 'Tel Aviv apartments are the most documented interior spaces online',    color: '#b45309', base: 20 },
                { name: 'Rental market restrictions are reshaping home decor choices',           color: '#d97706', base: 20 },
                { name: 'Home renovation content peaks during wartime displacement',             color: '#f59e0b', base: 18 },
            ]},
            { name: 'Smart Home & Tech', color: '#92400e', base: 20, desc: 'Connected devices, security tech, and energy saving.', children: [
                { name: 'Smart home tech adoption in Israel is accelerating in 2026',            color: '#78350f', base: 22 },
                { name: 'Home security technology is the fastest growing smart home category',   color: '#92400e', base: 20 },
                { name: 'Energy saving gadgets are trending in response to rising bills',        color: '#b45309', base: 20 },
                { name: 'Israeli consumers are early adopters of connected home technology',     color: '#d97706', base: 20 },
                { name: 'Shelter-in-place preparedness is driving emergency home tech sales',    color: '#f59e0b', base: 18 },
            ]},
            { name: 'Organization & Declutter', color: '#b45309', base: 20, desc: 'Minimalism, storage hacks, and tidying trends.', children: [
                { name: 'Decluttering content is the most watched home management genre',        color: '#78350f', base: 22 },
                { name: 'Minimalism is the dominant aesthetic trend in Israeli home content',    color: '#92400e', base: 20 },
                { name: 'Organization hacks for tiny spaces dominate Israeli home content',      color: '#b45309', base: 20 },
                { name: 'Wartime instability is driving more thoughtful consumption habits',     color: '#d97706', base: 20 },
                { name: 'Systematic purging is trending among Israeli young adults',             color: '#f59e0b', base: 18 },
            ]},
            { name: 'DIY & Renovation', color: '#d97706', base: 20, desc: 'Weekend projects, upcycling, and renter hacks.', children: [
                { name: 'DIY renovation content is surging as contractor costs become prohibitive', color: '#78350f', base: 22 },
                { name: 'Israeli renters are getting creative within the limits of rental laws',  color: '#92400e', base: 20 },
                { name: 'Weekend renovation projects are the most documented DIY content',       color: '#b45309', base: 20 },
                { name: 'Upcycling old furniture is outperforming new furniture purchases',      color: '#d97706', base: 20 },
                { name: 'Self-sufficiency content is the fastest growing home category',         color: '#f59e0b', base: 18 },
            ]},
            { name: 'Shelter & Safety Prep', color: '#f59e0b', base: 15, desc: 'Safe rooms, emergency kits, and bomb shelter design.', children: [
                { name: 'Home shelter preparation is a trending topic in Israeli TikTok',        color: '#78350f', base: 22 },
                { name: 'Safe room design content has moved from niche to mainstream',           color: '#92400e', base: 20 },
                { name: 'Emergency supply stocking is documented across all demographics',       color: '#b45309', base: 20 },
                { name: 'Home safety content spiked 400% during the Iranian missile attacks',    color: '#d97706', base: 20 },
                { name: 'Bomb shelter aesthetics are being reimagined as living spaces',         color: '#f59e0b', base: 18 },
            ]},
        ]},
        { name: 'Health & Wellness', color: '#d97706', base: 20, desc: 'Mental health, fitness, mindfulness, and nutrition.', children: [
            { name: 'Mental Health', color: '#78350f', base: 25, desc: 'Therapy, anxiety, PTSD, and wartime trauma content.', children: [
                { name: 'Mental health content is the fastest growing category in Israel',       color: '#78350f', base: 22 },
                { name: 'Wartime anxiety content dominates psychological wellness discussions',   color: '#92400e', base: 20 },
                { name: 'Therapist accounts have more followers than fitness accounts',          color: '#b45309', base: 20 },
                { name: 'Israeli teens are the most vocal about mental health on social media',  color: '#d97706', base: 20 },
                { name: 'Trauma processing content is reshaping public mental health discourse', color: '#f59e0b', base: 18 },
            ]},
            { name: 'Fitness & Training', color: '#92400e', base: 20, desc: 'Gym culture, running, CrossFit, yoga, and transformations.', children: [
                { name: 'Home workouts have permanently displaced gym culture for many Israelis', color: '#78350f', base: 22 },
                { name: 'Military-inspired fitness content is consistently the most viewed',     color: '#92400e', base: 20 },
                { name: 'Female fitness creators are the dominant voice in Israeli health content', color: '#b45309', base: 20 },
                { name: 'Israeli marathon and running culture is experiencing a revival',        color: '#d97706', base: 20 },
                { name: 'Functional fitness over aesthetics is the dominant training philosophy', color: '#f59e0b', base: 18 },
            ]},
            { name: 'Mindfulness & Meditation', color: '#b45309', base: 20, desc: 'Meditation apps, sleep content, and stress relief.', children: [
                { name: 'Meditation apps are among the most downloaded in Israel during war',    color: '#78350f', base: 22 },
                { name: 'Mindfulness content is mainstream not alternative in Israel now',       color: '#92400e', base: 20 },
                { name: 'Wartime has driven the fastest growth in meditation adoption',          color: '#b45309', base: 20 },
                { name: 'Young Israeli men are engaging with mindfulness for the first time',    color: '#d97706', base: 20 },
                { name: 'Sleep content is the most engaged wellness category during stress',     color: '#f59e0b', base: 18 },
            ]},
            { name: 'Nutrition & Diet Science', color: '#d97706', base: 20, desc: 'Evidence-based nutrition, meal prep, and supplements.', children: [
                { name: 'Evidence-based nutrition has replaced influencer diet culture',         color: '#78350f', base: 22 },
                { name: 'Meal prep content is the most practical health content format',         color: '#92400e', base: 20 },
                { name: 'Food insecurity messaging is emerging in Israeli nutrition content',    color: '#b45309', base: 20 },
                { name: 'Supplement culture is the most heavily criticized health trend',        color: '#d97706', base: 20 },
                { name: 'Israeli nutritionists are the most trusted health voices on TikTok',   color: '#f59e0b', base: 18 },
            ]},
            { name: 'Sleep & Recovery', color: '#f59e0b', base: 15, desc: 'Siren-disrupted sleep, recovery tips, and nap culture.', children: [
                { name: 'Sleep disruption from missile alerts is a documented health crisis',    color: '#78350f', base: 22 },
                { name: 'Recovery content is as popular as training content in Israel',         color: '#92400e', base: 20 },
                { name: 'Sleep optimization is the most searched wellness topic in 2026',        color: '#b45309', base: 20 },
                { name: 'Chronobiology content is gaining mainstream traction among Israelis',   color: '#d97706', base: 20 },
                { name: 'Nap culture is being rehabilitated as a performance strategy',          color: '#f59e0b', base: 18 },
            ]},
        ]},
        { name: 'Travel & Experiences', color: '#f59e0b', base: 10, desc: 'Domestic trips, budget travel, and adventure.', children: [
            { name: 'Domestic Travel', color: '#78350f', base: 30, desc: 'Negev, Galilee, road trips, and heritage sites.', children: [
                { name: 'Domestic tourism is booming as international travel remains complex',   color: '#78350f', base: 22 },
                { name: 'The Negev and Galilee are the most documented destinations in 2026',    color: '#92400e', base: 20 },
                { name: 'Road trip culture is experiencing a golden era in wartime Israel',      color: '#b45309', base: 20 },
                { name: 'Israeli heritage sites are seeing record domestic visitor numbers',     color: '#d97706', base: 20 },
                { name: 'Peripheral regions are discovering their tourism potential through TikTok', color: '#f59e0b', base: 18 },
            ]},
            { name: 'Budget Travel', color: '#92400e', base: 25, desc: 'Backpacking hacks, hostels, and group travel tips.', children: [
                { name: 'Budget travel hacks are among the most shared practical content',       color: '#78350f', base: 22 },
                { name: 'Young Israelis are traveling cheaper and smarter than before',          color: '#92400e', base: 20 },
                { name: 'Hostel and backpacker culture is thriving despite economic pressure',   color: '#b45309', base: 20 },
                { name: 'Travel points optimization content is growing among Israeli youth',     color: '#d97706', base: 20 },
                { name: 'Group travel and cost-sharing is the dominant travel format in 2026',   color: '#f59e0b', base: 18 },
            ]},
            { name: 'Adventure & Extreme', color: '#b45309', base: 20, desc: 'Skydiving, paragliding, and adrenaline escapes.', children: [
                { name: 'Adventure tourism is growing as Israelis seek escape from routine',     color: '#78350f', base: 22 },
                { name: 'Extreme sports content is the most watched travel category',            color: '#92400e', base: 20 },
                { name: 'Paragliding and skydiving have record interest in 2026',                color: '#b45309', base: 20 },
                { name: 'Israeli adventure travelers are reaching extreme locations globally',    color: '#d97706', base: 20 },
                { name: 'Adrenaline content spikes in engagement during national stress periods', color: '#f59e0b', base: 18 },
            ]},
            { name: 'Cultural & Heritage', color: '#d97706', base: 15, desc: 'Jewish heritage visits and archaeological sites.', children: [
                { name: 'Jewish heritage tourism is at its most personal and political',         color: '#78350f', base: 22 },
                { name: 'Israeli archaeological sites are the most underrated tourist destinations', color: '#92400e', base: 20 },
                { name: "Diaspora communities are returning to visit in wartime solidarity",      color: '#b45309', base: 20 },
                { name: 'Cultural heritage content is the most reshared travel format',          color: '#d97706', base: 20 },
                { name: "Israel's cultural depth is being rediscovered through TikTok travel",  color: '#f59e0b', base: 18 },
            ]},
            { name: 'Digital Nomad', color: '#f59e0b', base: 10, desc: 'Remote work abroad, Bali, Portugal, and tech nomads.', children: [
                { name: 'Israeli digital nomads are the fastest growing travel identity',        color: '#78350f', base: 22 },
                { name: 'Remote work from abroad is the most aspirational lifestyle in Israel',  color: '#92400e', base: 20 },
                { name: 'Tech industry workers are the dominant digital nomad demographic',      color: '#b45309', base: 20 },
                { name: 'Bali and Portugal are the top Israeli digital nomad destinations',      color: '#d97706', base: 20 },
                { name: 'Digital nomad content inspires and alienates in equal measure',         color: '#f59e0b', base: 18 },
            ]},
        ]},
    ]},
    { name: '📰 Current Affairs',       color: '#3b82f6', base: 29, desc: 'The ecosystem selected for the episode.', children: [

        { name: 'Security', color: '#1e3a8a', base: 30, desc: 'Iran, Gaza, hostages, and military operations.', children: [
            { name: 'Iran', color: '#1e3a8a', base: 13, desc: 'Nuclear threat, strikes, and the Iranian regime.',
             
              insights: {
                  reality: [
                      'The Iranian threat is over',
                      'Israel has proven military superiority over Iran',
                      'The economy is paralyzed',
                      'Dangerous to be far from a shelter',
                      'My children will develop anxiety',
                      'Even in shelters a missile can kill you',
                      'The US is Israel\'s ally',
                      'Trump loves Israel',
                      'Bibi is an excellent leader',
                      'The war is over'
                  ],
                  emotion: [
                      '🇮🇱 I feel proud to be Israeli',
                      '😊 I am glad Khamenei was killed',
                      '😰 I am financially anxious about this',
                      '😨 I fear being killed by a missile',
                      '😟 I fear my children develop siren anxiety',
                      '❤️ I love the IDF pilots',
                      '🙏 I am grateful to Trump',
                      '😌 I forgive Bibi for October 7th'
                  ],
                  desire: [
                      {
                          label: '🏛️ I want IDF to topple Iran\'s regime',
                          narratives: [
                              // ↑ rising — momentum and pride
                              { name: "Iran: axis of evil behind Israel's terror",              base: 12, color: '#1e3a8a' },
                              { name: "Iran's nuclear sites destroyed from the air",            base:  9, color: '#2563eb' },
                              { name: "Ayatollah regime crumbles as streets erupt",             base:  8, color: '#3b82f6' },
                              { name: "Trump and US back Israel's operation fully",             base:  8, color: '#2563eb' },
                              { name: "Air Force proves absolute aerial supremacy",             base:  7, color: '#3b82f6' },
                              { name: "Netanyahu's bold decision proves true leadership",       base:  6, color: '#38bdf8' },
                              { name: "Decades of Iranian terror finally answered decisively",  base:  5, color: '#38bdf8' },
                              // ↓ declining — fears proven wrong, fading from TikTok
                              { name: "Iran's retaliation will devastate Israeli cities",       base:  4, color: '#bae6fd' },
                              { name: "Israel's strike risks a full regional war",              base:  3, color: '#bae6fd' },
                              { name: "World will punish Israel for attacking Iran",            base:  2, color: '#e0f2fe' },
                          ],
                          opinion: [
                              { agrees: 48, unsure: 22, disagrees: 30 },
                              { agrees: 51, unsure: 20, disagrees: 29 },
                              { agrees: 50, unsure: 21, disagrees: 29 },
                              { agrees: 53, unsure: 19, disagrees: 28 },
                              { agrees: 55, unsure: 18, disagrees: 27 },
                              { agrees: 62, unsure: 15, disagrees: 23 },
                              { agrees: 64, unsure: 14, disagrees: 22 },
                          ]
                      },
                      {
                          label: '🙎🏻‍♂️ I want to return to work soon',
                          narratives: [
                              // ↑ rising — economic pain growing
                              { name: "Economy freezes, sirens traumatize families",            base: 11, color: '#1e3a8a' },
                              { name: "Small businesses collapse under prolonged war pressure", base: 10, color: '#2563eb' },
                              { name: "Cost of living crushes Israeli working families",        base:  9, color: '#2563eb' },
                              { name: "Reservists cannot return to their civilian jobs",        base:  8, color: '#3b82f6' },
                              { name: "War spending drains every last state reserve",           base:  7, color: '#3b82f6' },
                              { name: "Schools closed, parents stuck at home indefinitely",     base:  6, color: '#38bdf8' },
                              { name: "National debt spirals completely out of control",        base:  5, color: '#38bdf8' },
                              // ↓ declining — reasons to stay home fading from TikTok
                              { name: "Home front emergency requires everyone staying home",    base:  4, color: '#bae6fd' },
                              { name: "Government wartime compensation covers expenses fully",  base:  3, color: '#bae6fd' },
                              { name: "Patriotic duty requires personal economic sacrifice",    base:  2, color: '#e0f2fe' },
                          ],
                          opinion: [
                              { agrees: 71, unsure: 14, disagrees: 15 },
                              { agrees: 70, unsure: 14, disagrees: 16 },
                              { agrees: 68, unsure: 15, disagrees: 17 },
                              { agrees: 67, unsure: 15, disagrees: 18 },
                              { agrees: 65, unsure: 16, disagrees: 19 },
                              { agrees: 55, unsure: 18, disagrees: 27 },
                              { agrees: 53, unsure: 18, disagrees: 29 },
                          ]
                      },
                      {
                          label: '🏛️ I want alerts and sirens less frightening',
                          narratives: [
                              // ↑ rising — siren anxiety growing
                              { name: "Families trapped in shelters through endless nights",    base: 11, color: '#1e3a8a' },
                              { name: "Children develop PTSD from constant siren exposure",    base: 10, color: '#2563eb' },
                              { name: "Siren anxiety spreads across entire Israeli society",    base:  9, color: '#2563eb' },
                              { name: "Parents cannot calm terrified children during sirens",   base:  8, color: '#3b82f6' },
                              { name: "Nightly sirens destroy any sense of normalcy",          base:  7, color: '#3b82f6' },
                              { name: "Mental health system overwhelmed by war trauma",        base:  6, color: '#38bdf8' },
                              { name: "Cities emptied under Iranian missile fire completely",   base:  5, color: '#38bdf8' },
                              // ↓ declining — promises fading, frustration grows
                              { name: "Government promises comprehensive alert system upgrade", base:  4, color: '#bae6fd' },
                              { name: "New siren technology will reduce false alarms",         base:  3, color: '#bae6fd' },
                              { name: "Community groups organize effective mutual shelter support", base: 2, color: '#e0f2fe' },
                          ],
                          opinion: [
                              { agrees: 74, unsure: 12, disagrees: 14 },
                              { agrees: 74, unsure: 12, disagrees: 14 },
                              { agrees: 75, unsure: 11, disagrees: 14 },
                              { agrees: 76, unsure: 11, disagrees: 13 },
                              { agrees: 78, unsure: 10, disagrees: 12 },
                              { agrees: 82, unsure:  9, disagrees:  9 },
                              { agrees: 83, unsure:  9, disagrees:  8 },
                          ]
                      },
                      {
                          label: '🙎🏻‍♂️ I want to improve my nearest shelter',
                          narratives: [
                              // ↑ rising — shelter crisis awareness growing
                              { name: "Families trapped in shelters through endless nights",    base: 11, color: '#1e3a8a' },
                              { name: "Most shelters are neglected and dangerously unfit",     base: 10, color: '#2563eb' },
                              { name: "Old buildings lack any sealed safe rooms",              base:  9, color: '#2563eb' },
                              { name: "Shelter maintenance neglected for decades by state",    base:  8, color: '#3b82f6' },
                              { name: "Some neighborhoods have no shelters at all",            base:  7, color: '#3b82f6' },
                              { name: "Shelters lack ventilation, water, and basic supplies",  base:  6, color: '#38bdf8' },
                              { name: "War exposed decades of civil defense neglect",          base:  5, color: '#38bdf8' },
                              // ↓ declining — institutional promises fading, must DIY
                              { name: "Municipality actively renovates neighborhood shelters",  base:  4, color: '#bae6fd' },
                              { name: "Government allocates emergency budget for shelter repairs", base: 3, color: '#bae6fd' },
                              { name: "Professional shelter inspection teams deployed across Israel", base: 2, color: '#e0f2fe' },
                          ],
                          opinion: [
                              { agrees: 42, unsure: 25, disagrees: 33 },
                              { agrees: 43, unsure: 24, disagrees: 33 },
                              { agrees: 44, unsure: 24, disagrees: 32 },
                              { agrees: 46, unsure: 23, disagrees: 31 },
                              { agrees: 48, unsure: 22, disagrees: 30 },
                              { agrees: 61, unsure: 18, disagrees: 21 },
                              { agrees: 63, unsure: 17, disagrees: 20 },
                          ]
                      },
                      {
                          label: '🙎🏻‍♂️ I want to donate food to soldiers',
                          narratives: [
                              // ↑ rising — pride and solidarity
                              { name: "IDF pilots became overnight national heroes",           base: 11, color: '#1e3a8a' },
                              { name: "Reservists sacrifice everything for the nation's safety", base: 10, color: '#2563eb' },
                              { name: "Volunteer movements prove Israeli society's deep resilience", base: 9, color: '#2563eb' },
                              { name: "Heroic fighter stories touching every Israeli heart",   base:  8, color: '#3b82f6' },
                              { name: "Civilian solidarity with military stronger than ever",  base:  7, color: '#3b82f6' },
                              { name: "Women fighters proved themselves bravely on frontlines",base:  6, color: '#38bdf8' },
                              { name: "Nation rallies behind its defenders with love",         base:  5, color: '#38bdf8' },
                              // ↓ declining — criticism of soldiers fading from TikTok
                              { name: "Pilots refuse orders as Israel needs them",             base:  4, color: '#bae6fd' },
                              { name: "Soldiers complain publicly about poor field conditions",base:  3, color: '#bae6fd' },
                              { name: "Draft dodging rises among young Israeli men",           base:  2, color: '#e0f2fe' },
                          ],
                          opinion: [
                              { agrees: 66, unsure: 16, disagrees: 18 },
                              { agrees: 67, unsure: 15, disagrees: 18 },
                              { agrees: 68, unsure: 15, disagrees: 17 },
                              { agrees: 69, unsure: 14, disagrees: 17 },
                              { agrees: 71, unsure: 14, disagrees: 15 },
                              { agrees: 78, unsure: 11, disagrees: 11 },
                              { agrees: 79, unsure: 11, disagrees: 10 },
                          ]
                      },
                  ]
              },
              children: [
                {
                  name: "Israel plans massive preemptive strike on Iran", color: '#1e3a8a', base: 30,
                  insights: {
                    reality: [
                      'IDF rehearsed Iran strike for two years',
                      'Strike window closes as Iran enriches uranium',
                      'US approval is the only missing piece',
                    ],
                    emotion: [
                      '\u{1FAE1} I feel proud Israel prepares boldly',
                      '\u{1F61F} I worry the strike triggers wider war',
                      '\u{1F628} I fear Iranian missiles hitting my city',
                    ],
                    desire: [
                      {
                        label: '\u{1F3DB}\u{FE0F} I want IDF to strike Iran now',
                        narratives: [
                          { name: 'Iran crosses nuclear red line this week',       base: 12, color: '#1e3a8a' },
                          { name: 'IDF ready and waiting for final approval',       base: 11, color: '#2563eb' },
                          { name: 'US finally greenlights Israeli Iran operation',  base: 10, color: '#2563eb' },
                          { name: 'Iranian missiles land inside Israeli territory', base:  9, color: '#3b82f6' },
                          { name: 'International calls to wait grow louder',        base:  6, color: '#38bdf8' },
                          { name: 'Diplomacy still has time to stop Iran',          base:  5, color: '#93c5fd' },
                        ],
                        opinion: [
                          { agrees: 62, unsure: 18, disagrees: 20 },
                          { agrees: 64, unsure: 17, disagrees: 19 },
                          { agrees: 66, unsure: 16, disagrees: 18 },
                          { agrees: 68, unsure: 15, disagrees: 17 },
                          { agrees: 70, unsure: 14, disagrees: 16 },
                          { agrees: 72, unsure: 13, disagrees: 15 },
                          { agrees: 74, unsure: 12, disagrees: 14 },
                        ]
                      },
                      {
                        label: '\u{1F64E}\u{1F3FB}\u{200D}\u{2642}\u{FE0F} I want to prepare for retaliation',
                        narratives: [
                          { name: 'Tehran vows total war after Israeli strikes',      base: 13, color: '#1e3a8a' },
                          { name: 'Home Front Command updates shelter protocol',       base: 11, color: '#2563eb' },
                          { name: 'Iron Dome intercepts 95% of incoming missiles',    base: 10, color: '#2563eb' },
                          { name: 'Families rush to stock shelters with supplies',     base:  9, color: '#3b82f6' },
                          { name: "Reservists recalled after Operation Lion's Roar",  base:  8, color: '#38bdf8' },
                        ],
                        opinion: [
                          { agrees: 75, unsure: 14, disagrees: 11 },
                          { agrees: 76, unsure: 13, disagrees: 11 },
                          { agrees: 77, unsure: 13, disagrees: 10 },
                          { agrees: 78, unsure: 12, disagrees: 10 },
                          { agrees: 79, unsure: 12, disagrees:  9 },
                          { agrees: 80, unsure: 11, disagrees:  9 },
                          { agrees: 81, unsure: 10, disagrees:  9 },
                        ]
                      },
                      {
                        label: '\u{1F3DB}\u{FE0F} I want government to brief us honestly',
                        narratives: [
                          { name: 'Government hid strike details until last moment',     base: 12, color: '#1e3a8a' },
                          { name: 'Citizens demand real-time official strike updates',   base: 10, color: '#2563eb' },
                          { name: 'Netanyahu speaks live about Iran operation details',  base:  9, color: '#2563eb' },
                          { name: 'Knesset intelligence brief remains fully classified', base:  7, color: '#3b82f6' },
                          { name: 'Social media fills vacuum of official silence',       base:  6, color: '#38bdf8' },
                        ],
                        opinion: [
                          { agrees: 70, unsure: 15, disagrees: 15 },
                          { agrees: 71, unsure: 15, disagrees: 14 },
                          { agrees: 72, unsure: 14, disagrees: 14 },
                          { agrees: 73, unsure: 14, disagrees: 13 },
                          { agrees: 74, unsure: 13, disagrees: 13 },
                          { agrees: 75, unsure: 13, disagrees: 12 },
                          { agrees: 76, unsure: 12, disagrees: 12 },
                        ]
                      },
                    ]
                  }
                },
                {
                  name: "Iran's proxy network closing in on Israel", color: '#2563eb', base: 22,
                  insights: {
                    reality: [
                      "Hezbollah has 150,000 rockets aimed at Israel",
                      'Iran funds every militia surrounding our borders',
                      'Proxy ring tightens from all four directions',
                    ],
                    emotion: [
                      '\u{1F628} I fear living surrounded by Iranian proxies',
                      '\u{1F624} I am furious Iran uses proxy armies',
                      '\u{1F1EE}\u{1F1F1} I feel proud Israel fights back everywhere',
                    ],
                    desire: [
                      {
                        label: '\u{1F3DB}\u{FE0F} I want IDF to destroy proxy infrastructure',
                        narratives: [
                          { name: 'IDF destroys Hezbollah weapons depot in Lebanon',    base: 13, color: '#1e3a8a' },
                          { name: 'Houthi missiles reach southern Israeli suburbs',      base: 11, color: '#2563eb' },
                          { name: 'Iraqi militia launches drones at Israeli border',     base: 10, color: '#2563eb' },
                          { name: 'IDF kills senior Hezbollah commander in Beirut',     base:  9, color: '#3b82f6' },
                          { name: 'Iran transfers precision missiles to Hezbollah',      base:  8, color: '#38bdf8' },
                          { name: 'US designates new Iran proxy groups terrorists',      base:  5, color: '#93c5fd' },
                        ],
                        opinion: [
                          { agrees: 68, unsure: 16, disagrees: 16 },
                          { agrees: 70, unsure: 15, disagrees: 15 },
                          { agrees: 72, unsure: 14, disagrees: 14 },
                          { agrees: 74, unsure: 13, disagrees: 13 },
                          { agrees: 76, unsure: 12, disagrees: 12 },
                          { agrees: 78, unsure: 11, disagrees: 11 },
                          { agrees: 80, unsure: 10, disagrees: 10 },
                        ]
                      },
                      {
                        label: '\u{1F64E}\u{1F3FB}\u{200D}\u{2642}\u{FE0F} I want to understand the full threat',
                        narratives: [
                          { name: 'Hezbollah stores missiles in Lebanese civilian homes', base: 12, color: '#1e3a8a' },
                          { name: 'Iran spends $2B yearly on proxy armies',               base: 10, color: '#2563eb' },
                          { name: 'Six proxy fronts now surround Israel completely',       base:  9, color: '#2563eb' },
                          { name: 'All proxy groups follow direct Iranian orders',         base:  8, color: '#3b82f6' },
                          { name: 'IDF tracks 300,000 proxy fighters on alert',           base:  6, color: '#38bdf8' },
                        ],
                        opinion: [
                          { agrees: 72, unsure: 16, disagrees: 12 },
                          { agrees: 73, unsure: 15, disagrees: 12 },
                          { agrees: 74, unsure: 15, disagrees: 11 },
                          { agrees: 75, unsure: 14, disagrees: 11 },
                          { agrees: 76, unsure: 14, disagrees: 10 },
                          { agrees: 77, unsure: 13, disagrees: 10 },
                          { agrees: 78, unsure: 13, disagrees:  9 },
                        ]
                      },
                      {
                        label: '\u{1F3DB}\u{FE0F} I want Israel to cut Iran funding routes',
                        narratives: [
                          { name: "Iran's oil revenue funds all proxy operations",      base: 12, color: '#1e3a8a' },
                          { name: 'US sanctions fail to stop Iranian oil exports',      base: 10, color: '#2563eb' },
                          { name: 'China buys Iranian oil bypassing Western sanctions', base:  9, color: '#2563eb' },
                          { name: 'Israel lobbies US to enforce Iran sanctions fully',  base:  7, color: '#3b82f6' },
                          { name: 'Proxy funding drops when Iran economy shrinks',      base:  5, color: '#38bdf8' },
                        ],
                        opinion: [
                          { agrees: 65, unsure: 18, disagrees: 17 },
                          { agrees: 66, unsure: 18, disagrees: 16 },
                          { agrees: 67, unsure: 17, disagrees: 16 },
                          { agrees: 68, unsure: 17, disagrees: 15 },
                          { agrees: 69, unsure: 16, disagrees: 15 },
                          { agrees: 70, unsure: 16, disagrees: 14 },
                          { agrees: 71, unsure: 15, disagrees: 14 },
                        ]
                      },
                    ]
                  }
                },
                {
                  name: "Iran racing to complete a nuclear weapon", color: '#3b82f6', base: 20,
                  insights: {
                    reality: [
                      'Iran enriches uranium to 90% weapons grade',
                      'IAEA has lost access to Iranian facilities',
                      'Iran is weeks from enough fissile material',
                    ],
                    emotion: [
                      '\u{1F628} I fear Iran nuking Israeli cities someday',
                      '\u{1F61F} I worry the world lets Iran arm',
                      '\u{1F624} I am furious Iran enriches without consequence',
                    ],
                    desire: [
                      {
                        label: "\u{1F3DB}\u{FE0F} I want IDF to destroy Iran's bomb",
                        narratives: [
                          { name: "Iran's Fordow facility buried 80 meters deep",       base: 12, color: '#1e3a8a' },
                          { name: 'IDF bunker-busters can reach Fordow level',          base: 11, color: '#2563eb' },
                          { name: "Operation Lion's Roar set Iran back two years",      base: 10, color: '#2563eb' },
                          { name: 'Iran rebuilding nuclear capacity underground fast',  base:  9, color: '#3b82f6' },
                          { name: 'IAEA confirms enrichment stopped post-strike',       base:  6, color: '#38bdf8' },
                          { name: 'Nuclear deal negotiations restart after strike',     base:  5, color: '#93c5fd' },
                        ],
                        opinion: [
                          { agrees: 71, unsure: 15, disagrees: 14 },
                          { agrees: 73, unsure: 14, disagrees: 13 },
                          { agrees: 75, unsure: 13, disagrees: 12 },
                          { agrees: 77, unsure: 12, disagrees: 11 },
                          { agrees: 79, unsure: 11, disagrees: 10 },
                          { agrees: 81, unsure: 10, disagrees:  9 },
                          { agrees: 83, unsure:  9, disagrees:  8 },
                        ]
                      },
                      {
                        label: '\u{1F3DB}\u{FE0F} I want Israel to warn the world loudly',
                        narratives: [
                          { name: 'Netanyahu at UN: Iran 90 days from bomb',          base: 12, color: '#1e3a8a' },
                          { name: 'Mossad leaks Iran nuclear data to media',           base: 10, color: '#2563eb' },
                          { name: 'Europe dismisses Israeli nuclear warnings again',   base:  9, color: '#2563eb' },
                          { name: 'US intelligence confirms Iranian breakout timeline',base:  8, color: '#3b82f6' },
                          { name: 'Arab states fear Iranian bomb as much',             base:  6, color: '#38bdf8' },
                        ],
                        opinion: [
                          { agrees: 67, unsure: 17, disagrees: 16 },
                          { agrees: 68, unsure: 17, disagrees: 15 },
                          { agrees: 69, unsure: 16, disagrees: 15 },
                          { agrees: 70, unsure: 16, disagrees: 14 },
                          { agrees: 71, unsure: 15, disagrees: 14 },
                          { agrees: 72, unsure: 15, disagrees: 13 },
                          { agrees: 73, unsure: 14, disagrees: 13 },
                        ]
                      },
                      {
                        label: '\u{1F64E}\u{1F3FB}\u{200D}\u{2642}\u{FE0F} I want to trust Israel stops the bomb',
                        narratives: [
                          { name: "Israel has stopped Iran's nuclear program before",   base: 11, color: '#1e3a8a' },
                          { name: 'Stuxnet proved Israel can destroy Iran remotely',    base: 10, color: '#2563eb' },
                          { name: 'IDF chief: Iran will not get nuclear weapon',        base:  9, color: '#2563eb' },
                          { name: 'Mossad assassinated key Iranian nuclear scientists', base:  8, color: '#3b82f6' },
                          { name: 'Public trust in IDF nuclear deterrence is high',    base:  6, color: '#38bdf8' },
                        ],
                        opinion: [
                          { agrees: 58, unsure: 20, disagrees: 22 },
                          { agrees: 60, unsure: 19, disagrees: 21 },
                          { agrees: 62, unsure: 18, disagrees: 20 },
                          { agrees: 64, unsure: 17, disagrees: 19 },
                          { agrees: 66, unsure: 16, disagrees: 18 },
                          { agrees: 68, unsure: 15, disagrees: 17 },
                          { agrees: 70, unsure: 14, disagrees: 16 },
                        ]
                      },
                    ]
                  }
                },
                {
                  name: "US holds Israel back from striking Iran", color: '#38bdf8', base: 16,
                  insights: {
                    reality: [
                      'Washington demands Israel coordinate every military move',
                      'US fears Iranian retaliation on its own bases',
                      'American delays have cost Israel critical windows',
                    ],
                    emotion: [
                      '\u{1F624} I am furious America controls our security',
                      '\u{1F630} I am anxious waiting for US permission',
                      '\u{1F1EE}\u{1F1F1} I feel proud when Israel acts alone',
                    ],
                    desire: [
                      {
                        label: '\u{1F3DB}\u{FE0F} I want IDF to act independently now',
                        narratives: [
                          { name: 'Israel struck Iran without full US advance notice',       base: 12, color: '#1e3a8a' },
                          { name: 'Biden demanded Israel delay strike three times',          base: 11, color: '#2563eb' },
                          { name: 'Trump gave Israel green light within 48 hours',          base: 10, color: '#2563eb' },
                          { name: 'IDF chief: we act when threat is existential',           base:  9, color: '#3b82f6' },
                          { name: 'White House furious Israel acted unilaterally',          base:  7, color: '#38bdf8' },
                          { name: 'US-Israel coordination held strong despite pressure',    base:  4, color: '#93c5fd' },
                        ],
                        opinion: [
                          { agrees: 55, unsure: 20, disagrees: 25 },
                          { agrees: 57, unsure: 20, disagrees: 23 },
                          { agrees: 59, unsure: 19, disagrees: 22 },
                          { agrees: 61, unsure: 18, disagrees: 21 },
                          { agrees: 63, unsure: 18, disagrees: 19 },
                          { agrees: 65, unsure: 17, disagrees: 18 },
                          { agrees: 67, unsure: 16, disagrees: 17 },
                        ]
                      },
                      {
                        label: '\u{1F64E}\u{1F3FB}\u{200D}\u{2642}\u{FE0F} I want Israel free from American constraints',
                        narratives: [
                          { name: 'US weapons aid conditioned on Israeli restraint',    base: 11, color: '#1e3a8a' },
                          { name: 'Israel relies on US resupply for long campaigns',    base: 10, color: '#2563eb' },
                          { name: "Israel's defense industry reduces US dependency",    base:  9, color: '#2563eb' },
                          { name: 'Arrow and Iron Beam reduce reliance on US systems',  base:  8, color: '#3b82f6' },
                          { name: 'Israeli-made munitions replace US-imported bombs',   base:  6, color: '#38bdf8' },
                        ],
                        opinion: [
                          { agrees: 60, unsure: 19, disagrees: 21 },
                          { agrees: 61, unsure: 19, disagrees: 20 },
                          { agrees: 62, unsure: 18, disagrees: 20 },
                          { agrees: 63, unsure: 18, disagrees: 19 },
                          { agrees: 64, unsure: 17, disagrees: 19 },
                          { agrees: 65, unsure: 17, disagrees: 18 },
                          { agrees: 66, unsure: 16, disagrees: 18 },
                        ]
                      },
                      {
                        label: '\u{1F3DB}\u{FE0F} I want government to resist US pressure',
                        narratives: [
                          { name: 'Netanyahu defied US pressure and struck Iran anyway',   base: 11, color: '#1e3a8a' },
                          { name: 'US Secretary of State flew to stop the strike',         base:  9, color: '#2563eb' },
                          { name: 'Israel informed US one hour before the strike',         base:  9, color: '#2563eb' },
                          { name: 'Congress threatens to withhold weapons from Israel',    base:  7, color: '#3b82f6' },
                          { name: 'Israelis rally behind government defying US',           base:  5, color: '#38bdf8' },
                        ],
                        opinion: [
                          { agrees: 58, unsure: 20, disagrees: 22 },
                          { agrees: 60, unsure: 19, disagrees: 21 },
                          { agrees: 62, unsure: 18, disagrees: 20 },
                          { agrees: 64, unsure: 17, disagrees: 19 },
                          { agrees: 66, unsure: 16, disagrees: 18 },
                          { agrees: 68, unsure: 15, disagrees: 17 },
                          { agrees: 70, unsure: 14, disagrees: 16 },
                        ]
                      },
                    ]
                  }
                },
                {
                  name: "Iranians revolt against Khamenei's regime", color: '#93c5fd', base: 12,
                  insights: {
                    reality: [
                      "Millions of Iranians oppose the Khamenei regime",
                      'Iranian economy collapses under years of sanctions',
                      "Young Iranians see Israel's strike as liberation",
                    ],
                    emotion: [
                      '\u{2764}\u{FE0F} I feel solidarity with Iranians fighting freedom',
                      '\u{1F60A} I feel hopeful the regime finally crumbles',
                      '\u{1F60C} I feel relieved Iranians reject their rulers',
                    ],
                    desire: [
                      {
                        label: "\u{1F64E}\u{1F3FB}\u{200D}\u{2642}\u{FE0F} I want to support Iranian people's uprising",
                        narratives: [
                          { name: "Iranians chant death to Khamenei in streets",      base: 13, color: '#1e3a8a' },
                          { name: "Israeli TikTok sends solidarity to Iran's people", base: 11, color: '#2563eb' },
                          { name: 'Iranian women burn hijabs after IDF strikes',      base: 10, color: '#2563eb' },
                          { name: 'Diaspora Iranians celebrate in Tel Aviv streets',  base:  9, color: '#3b82f6' },
                          { name: 'IRGC fires on protesters in downtown Tehran',      base:  7, color: '#38bdf8' },
                          { name: 'Iranian opposition calls Israel strike a gift',    base:  5, color: '#93c5fd' },
                        ],
                        opinion: [
                          { agrees: 65, unsure: 18, disagrees: 17 },
                          { agrees: 67, unsure: 17, disagrees: 16 },
                          { agrees: 69, unsure: 16, disagrees: 15 },
                          { agrees: 71, unsure: 15, disagrees: 14 },
                          { agrees: 73, unsure: 14, disagrees: 13 },
                          { agrees: 75, unsure: 13, disagrees: 12 },
                          { agrees: 77, unsure: 12, disagrees: 11 },
                        ]
                      },
                      {
                        label: '\u{1F3DB}\u{FE0F} I want Israel to reach Iranian opposition',
                        narratives: [
                          { name: 'Mossad contacts Iranian opposition leaders secretly',  base: 11, color: '#1e3a8a' },
                          { name: 'Iran opposition in exile praises Israeli strikes',     base: 10, color: '#2563eb' },
                          { name: 'Israel funds Persian-language media inside Iran',      base:  9, color: '#2563eb' },
                          { name: 'Opposition asks Israel for intelligence support',      base:  8, color: '#3b82f6' },
                          { name: 'Israeli-Iranian back channels operate in Europe',      base:  6, color: '#38bdf8' },
                        ],
                        opinion: [
                          { agrees: 55, unsure: 22, disagrees: 23 },
                          { agrees: 57, unsure: 21, disagrees: 22 },
                          { agrees: 59, unsure: 20, disagrees: 21 },
                          { agrees: 61, unsure: 19, disagrees: 20 },
                          { agrees: 63, unsure: 18, disagrees: 19 },
                          { agrees: 65, unsure: 17, disagrees: 18 },
                          { agrees: 67, unsure: 16, disagrees: 17 },
                        ]
                      },
                      {
                        label: "\u{1F3DB}\u{FE0F} I want IDF to topple Khamenei's regime",
                        narratives: [
                          { name: "Strike weakened IRGC's grip on Iranian society",    base: 12, color: '#1e3a8a' },
                          { name: 'Regime change would end proxy war permanently',      base: 11, color: '#2563eb' },
                          { name: "IDF chief: goal is weakening regime not just strike",base:  9, color: '#2563eb' },
                          { name: 'Western governments oppose Israeli regime change',   base:  8, color: '#3b82f6' },
                          { name: "US warns Israel: don't pursue regime change now",    base:  6, color: '#38bdf8' },
                          { name: 'Regime collapse could destabilize entire region',    base:  4, color: '#93c5fd' },
                        ],
                        opinion: [
                          { agrees: 48, unsure: 22, disagrees: 30 },
                          { agrees: 50, unsure: 22, disagrees: 28 },
                          { agrees: 52, unsure: 21, disagrees: 27 },
                          { agrees: 54, unsure: 21, disagrees: 25 },
                          { agrees: 56, unsure: 20, disagrees: 24 },
                          { agrees: 58, unsure: 19, disagrees: 23 },
                          { agrees: 60, unsure: 18, disagrees: 22 },
                        ]
                      },
                    ]
                  }
                },
              ]},
            { name: 'The Gaza War', color: '#1d4ed8', base: 25, desc: 'IDF operations, civilian toll, and exit strategy.', children: [
                { name: 'IDF dismantling Hamas systematically and effectively', color: '#1e3a8a', base: 28 },
                { name: "Civilian casualties undermine Israel's moral case",    color: '#2563eb', base: 22 },
                { name: 'Gaza war drags on with no end',                       color: '#3b82f6', base: 18 },
                { name: 'Soldiers stuck in Gaza with no horizon',              color: '#38bdf8', base: 14 },
                { name: "Hamas rebuilding beneath Gaza's ruins",               color: '#bae6fd', base: 10 },
                { name: 'Aid blocked while Gaza starves completely',            color: '#e0f2fe', base: 8 },
            ]},
            { name: 'October 7', color: '#3b82f6', base: 20, desc: 'The massacre, intelligence failure, and state inquiry.', children: [
                { name: 'October 7 worst trauma since the Holocaust',          color: '#1e3a8a', base: 28 },
                { name: 'Survivors share raw October 7 testimony',             color: '#2563eb', base: 22 },
                { name: 'The world already forgot October 7',                  color: '#3b82f6', base: 20 },
                { name: 'Massacre exposed total state intelligence failure',    color: '#38bdf8', base: 18 },
                { name: 'No one held accountable for the failure',             color: '#bae6fd', base: 12 },
            ]},
            { name: 'The Hostages', color: '#38bdf8', base: 15, desc: 'Returns, captivity horrors, and rehabilitation.', children: [
                { name: 'Hostages finally home but deeply scarred',            color: '#1e3a8a', base: 28 },
                { name: 'Deal released dangerous terrorists for hostages',     color: '#2563eb', base: 22 },
                { name: 'Families fought the state to save them',              color: '#3b82f6', base: 20 },
                { name: 'Captivity horrors world refuses to acknowledge',      color: '#38bdf8', base: 18 },
                { name: 'Hostages need years of rehabilitation ahead',         color: '#bae6fd', base: 12 },
            ]},
            { name: 'Home Front', color: '#93c5fd', base: 10, desc: 'Missiles, sirens, evacuations, and mental health.', children: [
                { name: 'Missiles rain down on cities and shelters',            color: '#1e3a8a', base: 25 },
                { name: 'Iron Dome intercepts fill TikTok feeds',              color: '#2563eb', base: 20 },
                { name: 'Cities evacuated with nowhere to return',              color: '#3b82f6', base: 18 },
                { name: 'Children growing up traumatized by constant sirens',   color: '#38bdf8', base: 15 },
                { name: 'Northern and southern communities completely abandoned',color: '#bae6fd', base: 10 },
                { name: 'Iran missiles turn home front into warzone',           color: '#e0f2fe', base: 12, born: true },
            ]},
            { name: 'IDF Service', color: '#bae6fd', base: 10, desc: 'Reservists, combat burden, and service morale.', children: [
                { name: 'Reservists exhausted after two years of service',      color: '#1e3a8a', base: 26 },
                { name: 'Combat soldiers underpaid and mentally shattered',      color: '#2563eb', base: 21 },
                { name: 'Young Israelis questioning military service altogether',color: '#3b82f6', base: 17 },
                { name: 'Military families carry disproportionate wartime burden',color: '#38bdf8', base: 15 },
                { name: 'Reserve duty wrecking careers and family life',        color: '#bae6fd', base: 9 },
                { name: 'IDF pilots became overnight national heroes',          color: '#e0f2fe', base: 12, born: true },
            ]},
            { name: 'Northern Border', color: '#e0f2fe', base: 7, desc: 'Displaced residents, Hezbollah, and rebuilding.', children: [
                { name: 'Northern residents displaced for over two years',      color: '#1e3a8a', base: 28 },
                { name: 'Rebuilt north promised but nothing delivered yet',     color: '#2563eb', base: 22 },
                { name: 'Families returning to destroyed homes and ruins',      color: '#3b82f6', base: 20 },
                { name: 'Northern economy collapsed from prolonged evacuation', color: '#38bdf8', base: 18 },
                { name: 'Hezbollah threat still looms over the border',        color: '#bae6fd', base: 12 },
            ]},
        ]},

        { name: 'Politics', color: '#2563eb', base: 22, desc: 'Government, courts, coalition, and elections.', children: [
            { name: 'The Government', color: '#1e3a8a', base: 25, desc: 'Leadership, opposition, and democratic erosion.', children: [
                { name: 'Government of failure destroying the state',           color: '#1e3a8a', base: 18 },
                { name: 'Elite and left persecuting the right',                 color: '#2563eb', base: 17 },
                { name: 'A strong brave leader protecting Israel',              color: '#3b82f6', base: 17 },
                { name: 'Irresponsible opposition harming national resilience', color: '#38bdf8', base: 16 },
                { name: 'An emerging dictatorship crushing democratic norms',   color: '#bae6fd', base: 16 },
                { name: "Netanyahu's bold decision proves true leadership",     color: '#e0f2fe', base: 16 },
            ]},
            { name: 'The Courts', color: '#2563eb', base: 18, desc: 'Judicial overhaul, corruption trials, and rule of law.', children: [
                { name: 'Judicial overhaul destroying Israeli democracy forever',color: '#1e3a8a', base: 20 },
                { name: "Netanyahu's trials exposing deep personal corruption", color: '#2563eb', base: 20 },
                { name: 'The judicial junta stealing the elections',            color: '#3b82f6', base: 20 },
                { name: 'Weak justice system facing corrupt politicians',       color: '#38bdf8', base: 20 },
                { name: 'Supreme Court: last shield against tyranny',           color: '#bae6fd', base: 20 },
            ]},
            { name: 'The Coalition', color: '#3b82f6', base: 17, desc: 'Budget deals, Haredi funding, and coalition politics.', children: [
                { name: 'Coalition spending burying Israel in deep debt',       color: '#1e3a8a', base: 20 },
                { name: 'Draft-dodging coalition looting state budget',         color: '#2563eb', base: 20 },
                { name: 'Coalition funds robbing the middle class',             color: '#3b82f6', base: 20 },
                { name: 'Economic neglect of periphery during wartime',         color: '#38bdf8', base: 20 },
                { name: 'Unity beats division in parliament',                   color: '#bae6fd', base: 20 },
            ]},
            { name: 'Elections', color: '#38bdf8', base: 15, desc: 'Early election demands and post-war political shifts.', children: [
                { name: 'Citizens demand early elections before state collapses',color: '#1e3a8a', base: 20 },
                { name: 'Wartime is wrong moment to change leadership',         color: '#2563eb', base: 20 },
                { name: "Next elections will reset Israel's political map",     color: '#3b82f6', base: 20 },
                { name: 'Netanyahu will never allow fair elections again',       color: '#38bdf8', base: 20 },
                { name: "Victory over Iran strengthens Bibi's political future",color: '#bae6fd', base: 20 },
            ]},
            { name: 'Religion & State', color: '#93c5fd', base: 13, desc: 'Religious coercion, Shabbat laws, and theocracy fears.', children: [
                { name: 'Religious coercion turning Israel into theocracy',     color: '#1e3a8a', base: 20 },
                { name: 'Kashrut laws protect Jewish identity and tradition',   color: '#2563eb', base: 20 },
                { name: 'Coercive religion drives secular Israelis abroad',     color: '#3b82f6', base: 20 },
                { name: 'Yeshiva budgets ballooning while soldiers sacrifice',  color: '#38bdf8', base: 20 },
                { name: 'No public transport on Shabbat strands millions',      color: '#bae6fd', base: 20 },
            ]},
            { name: 'Haredi Draft', color: '#bae6fd', base: 12, desc: 'Military exemptions, equal burden, and integration.', children: [
                { name: 'Draft-dodging Haredim living at taxpayer expense',     color: '#1e3a8a', base: 20 },
                { name: "Torah students are Israel's spiritual Iron Dome",      color: '#2563eb', base: 20 },
                { name: 'Equal burden is condition for national survival',      color: '#3b82f6', base: 20 },
                { name: 'Baseless hatred and persecution of the religious',     color: '#38bdf8', base: 20 },
                { name: 'Haredim integrating slowly into the workforce',        color: '#bae6fd', base: 20 },
            ]},
        ]},

        { name: 'Society', color: '#0ea5e9', base: 15, desc: 'Feminism, coexistence, immigration, and identity.', children: [
            { name: 'Feminism', color: '#1e3a8a', base: 20, desc: 'Female soldiers, Oct 7 violence, and gender equality.', children: [
                { name: 'Women on frontlines proving female power',             color: '#1e3a8a', base: 20 },
                { name: 'October 7 sexual violence denied by world',            color: '#2563eb', base: 20 },
                { name: 'Gender equality still missing from Israeli society',   color: '#3b82f6', base: 20 },
                { name: 'Female soldiers carry equal burden of sacrifice',      color: '#38bdf8', base: 20 },
                { name: 'Domestic violence surging in wartime Israel',          color: '#bae6fd', base: 20 },
            ]},
            { name: 'Arab-Jewish Relations', color: '#2563eb', base: 18, desc: 'Coexistence, shared society, and rising racism.', children: [
                { name: 'Arab citizens are loyal partners in Israel',           color: '#1e3a8a', base: 20 },
                { name: 'October 7 shattered coexistence illusion completely',  color: '#2563eb', base: 20 },
                { name: 'Shared society is possible and urgently necessary',    color: '#3b82f6', base: 20 },
                { name: 'Arab political parties strengthen Israeli democracy',  color: '#38bdf8', base: 20 },
                { name: 'Anti-Arab racism rising in Israeli discourse',         color: '#bae6fd', base: 20 },
            ]},
            { name: 'Immigration', color: '#3b82f6', base: 16, desc: 'Aliyah, brain drain, and diaspora solidarity.', children: [
                { name: 'Aliyah from France and US surging',                    color: '#1e3a8a', base: 20 },
                { name: 'Israeli emigration brain drain threatens economy',     color: '#2563eb', base: 20 },
                { name: 'New immigrants strengthen demographic future steadily',color: '#3b82f6', base: 20 },
                { name: 'War pushes Israelis to seek second passports',         color: '#38bdf8', base: 20 },
                { name: 'Global diaspora rallying behind the homeland',         color: '#bae6fd', base: 20 },
            ]},
            { name: 'Equality', color: '#38bdf8', base: 14, desc: 'Mizrahi rights, LGBTQ, periphery, and wealth gaps.', children: [
                { name: 'Mizrahi Jews still face deep systemic discrimination', color: '#1e3a8a', base: 20 },
                { name: 'Periphery communities left behind by the elite',       color: '#2563eb', base: 20 },
                { name: 'LGBTQ rights under pressure from religious coalition', color: '#3b82f6', base: 20 },
                { name: 'Wealth inequality growing fastest in wartime',         color: '#38bdf8', base: 20 },
                { name: 'Disability rights ignored during wartime emergency',   color: '#bae6fd', base: 20 },
            ]},
            { name: 'Jewish Identity', color: '#93c5fd', base: 12, desc: 'Secular identity, tradition, and culture wars.', children: [
                { name: 'Jewish and secular is a proud identity',               color: '#1e3a8a', base: 20 },
                { name: 'Zionism was always secular not Orthodox',               color: '#2563eb', base: 20 },
                { name: 'Jewish renewal movements reviving Israeli spirituality',color: '#3b82f6', base: 20 },
                { name: 'Tradition and modernity can coexist in Israel',        color: '#38bdf8', base: 20 },
                { name: 'Secular Israelis are losing the culture war',          color: '#bae6fd', base: 20 },
            ]},
            { name: 'Social Protest', color: '#bae6fd', base: 10, desc: 'Civil protest, fatigue, and wartime restrictions.', children: [
                { name: "Civil protest is democracy's essential lifeblood",     color: '#1e3a8a', base: 20 },
                { name: 'Protest fatigue sets in after long years',             color: '#2563eb', base: 20 },
                { name: 'Young Israelis lead next wave of change',              color: '#3b82f6', base: 20 },
                { name: 'Protest blocked by wartime security needs',            color: '#38bdf8', base: 20 },
                { name: 'Opposition exploiting wartime for political gain',     color: '#bae6fd', base: 20 },
            ]},
            { name: 'Education', color: '#e0f2fe', base: 10, desc: 'School closures, teacher shortage, and curriculum gaps.', children: [
                { name: 'Schools closed for months traumatizing children',      color: '#1e3a8a', base: 20 },
                { name: 'Teacher shortage devastating public school system',    color: '#2563eb', base: 20 },
                { name: 'Education budget slashed for war spending',            color: '#3b82f6', base: 20 },
                { name: 'Haredi schools teaching no core curriculum',           color: '#38bdf8', base: 20 },
                { name: 'Israeli students falling behind international standards',color: '#bae6fd', base: 20 },
            ]},
        ]},

        { name: 'Cost of Living', color: '#38bdf8', base: 20, desc: 'Housing, food prices, tech, and employment.', children: [
            { name: 'Housing', color: '#1e3a8a', base: 25, desc: 'Sky-high prices, frozen construction, and rent crisis.', children: [
                { name: 'Real estate prices block young families',              color: '#1e3a8a', base: 20 },
                { name: 'Construction frozen as workers flee warzone',          color: '#2563eb', base: 20 },
                { name: 'Government housing plan is pure fantasy',              color: '#3b82f6', base: 20 },
                { name: 'Rent surge leaves young Israelis homeless',            color: '#38bdf8', base: 20 },
                { name: 'Housing market buckling under wartime demand',         color: '#bae6fd', base: 20 },
            ]},
            { name: 'Supermarket Prices', color: '#2563eb', base: 20, desc: 'Record prices, monopoly gouging, and middle class.', children: [
                { name: 'Cost of living choking Israeli families',              color: '#1e3a8a', base: 20 },
                { name: 'Supermarket prices hit new record monthly',            color: '#2563eb', base: 20 },
                { name: 'Middle class disappearing under economic pressure',    color: '#3b82f6', base: 20 },
                { name: 'Government ignores supermarket monopoly price gouging',color: '#38bdf8', base: 20 },
                { name: 'Wartime price gouging is criminal exploitation',       color: '#bae6fd', base: 20 },
            ]},
            { name: 'High-Tech', color: '#3b82f6', base: 15, desc: 'Startup funding, AI boom, and capital flight.', children: [
                { name: 'Israeli high-tech still attracting global capital',    color: '#1e3a8a', base: 20 },
                { name: 'Unicorn companies leaving Israel for safety',          color: '#2563eb', base: 20 },
                { name: "AI revolution driving Israel's next economic boom",    color: '#3b82f6', base: 20 },
                { name: 'Cybersecurity exports breaking records despite war',   color: '#38bdf8', base: 20 },
                { name: 'Capital flight accelerating as war drags on',          color: '#bae6fd', base: 20 },
            ]},
            { name: 'State Budget', color: '#38bdf8', base: 12, desc: 'War deficit, credit downgrade, and austerity cuts.', children: [
                { name: 'War costs push deficit to unsustainable levels',       color: '#1e3a8a', base: 20 },
                { name: 'Coalition spending burying Israel in deep debt',       color: '#2563eb', base: 20 },
                { name: "Credit downgrade threatens Israel's economic future",  color: '#3b82f6', base: 20 },
                { name: 'Austerity cuts hitting welfare and education budgets', color: '#38bdf8', base: 20 },
                { name: 'National debt spirals completely out of control',      color: '#bae6fd', base: 20 },
            ]},
            { name: 'Banking', color: '#bae6fd', base: 10, desc: 'Interest rates, mortgage crisis, and bank profits.', children: [
                { name: 'Bank of Israel raises rates crushing mortgages',       color: '#1e3a8a', base: 20 },
                { name: 'Banking monopoly extracting wartime profits shamelessly',color: '#2563eb', base: 20 },
                { name: 'Mortgage relief programs failing those in need',       color: '#3b82f6', base: 20 },
                { name: 'Interest rate policy worsening housing affordability', color: '#38bdf8', base: 20 },
                { name: 'Financial literacy gap hurting the middle class',      color: '#bae6fd', base: 20 },
            ]},
            { name: 'Employment', color: '#93c5fd', base: 10, desc: 'Reservist jobs, youth unemployment, and gig economy.', children: [
                { name: 'Reservists cannot return to their civilian jobs',      color: '#1e3a8a', base: 20 },
                { name: 'Unemployment rising among young Israeli adults',       color: '#2563eb', base: 20 },
                { name: 'Foreign workers replacing Israeli labor force',        color: '#3b82f6', base: 20 },
                { name: 'Gig economy replacing stable career paths',            color: '#38bdf8', base: 20 },
                { name: 'Tech layoffs devastating mid-career professionals',    color: '#bae6fd', base: 20 },
            ]},
            { name: 'Healthcare', color: '#e0f2fe', base: 8, desc: 'Overcrowded hospitals, wait times, and periphery gaps.', children: [
                { name: 'Public hospitals overwhelmed and severely understaffed',color: '#1e3a8a', base: 20 },
                { name: 'Healthcare wait times reaching dangerous lengths',     color: '#2563eb', base: 20 },
                { name: 'Mental health services completely inaccessible nationwide',color: '#3b82f6', base: 20 },
                { name: 'Periphery communities lack basic medical access',      color: '#38bdf8', base: 20 },
                { name: 'Private medicine creating two-tier health system',     color: '#bae6fd', base: 20 },
            ]},
        ]},

        { name: 'Crime', color: '#93c5fd', base: 13, desc: 'Organized crime, police, street violence, and cyber.', children: [
            { name: 'Organized Crime', color: '#1e3a8a', base: 30, desc: 'Gang wars, drug territory, and protection rackets.', children: [
                { name: 'Organized crime shooting up Israeli streets',          color: '#1e3a8a', base: 20 },
                { name: 'Gang wars over drug territory kill civilians',         color: '#2563eb', base: 20 },
                { name: 'Crime families control entire Arab communities',       color: '#3b82f6', base: 20 },
                { name: 'Underworld connected to political power circles',      color: '#38bdf8', base: 20 },
                { name: 'Protection rackets terrorize small business owners',   color: '#bae6fd', base: 20 },
            ]},
            { name: 'Police', color: '#2563eb', base: 20, desc: 'Underfunding, politicization, and National Guard debate.', children: [
                { name: 'Police underfunded and overwhelmed across districts',  color: '#1e3a8a', base: 20 },
                { name: 'Ben Gvir politicizing police for coalition needs',     color: '#2563eb', base: 20 },
                { name: 'National Guard creation bypasses democratic oversight',color: '#3b82f6', base: 20 },
                { name: 'Law enforcement collapse enables criminal takeover',   color: '#38bdf8', base: 20 },
                { name: 'Police brutality complaints rising in wartime',        color: '#bae6fd', base: 20 },
            ]},
            { name: 'Street Violence', color: '#3b82f6', base: 18, desc: 'Random attacks, gun crime, and self-arming trend.', children: [
                { name: 'Random street violence terrorizing Israeli citizens',  color: '#1e3a8a', base: 20 },
                { name: 'Gun violence spilling into civilian sphere',           color: '#2563eb', base: 20 },
                { name: 'Israelis arming themselves for personal protection',   color: '#3b82f6', base: 20 },
                { name: 'Violent crime up 40% since October 7',                 color: '#38bdf8', base: 20 },
                { name: 'Unsafe streets keep families indoors after dark',      color: '#bae6fd', base: 20 },
            ]},
            { name: 'Cybercrime', color: '#38bdf8', base: 17, desc: 'Investment scams, AI fraud, and crypto schemes.', children: [
                { name: 'Investment scams robbing Israelis of savings',         color: '#1e3a8a', base: 20 },
                { name: 'AI-powered fraud targeting elderly Israelis online',   color: '#2563eb', base: 20 },
                { name: 'Crypto pyramid schemes ruining young investors',       color: '#3b82f6', base: 20 },
                { name: 'Phishing attacks targeting soldiers and families',     color: '#38bdf8', base: 20 },
                { name: 'Iranian state cyberattacks on Israeli systems',        color: '#bae6fd', base: 20 },
            ]},
            { name: 'Agricultural Crime', color: '#bae6fd', base: 15, desc: 'Farm extortion, theft, and crop intimidation.', children: [
                { name: 'Farmers extorted by protection rackets constantly',    color: '#1e3a8a', base: 20 },
                { name: 'Agricultural theft crippling Negev and Galilee',       color: '#2563eb', base: 20 },
                { name: 'State abandons farmers facing criminal terror',        color: '#3b82f6', base: 20 },
                { name: 'Farm equipment theft reaching epidemic proportions',   color: '#38bdf8', base: 20 },
                { name: 'Crops burnt by mafia intimidation campaigns',          color: '#bae6fd', base: 20 },
            ]},
        ]},

    ]},
    { name: '📚 Education & Knowledge', color: '#8b5cf6', base: 8, desc: 'Podcasts, life tips, learning, and technology.', children: [
        { name: 'Technology & AI', color: '#4c1d95', base: 30, desc: 'AI tools, coding, gadgets, and cybersecurity.', children: [
            { name: 'AI Tools & Applications', color: '#4c1d95', base: 30, desc: 'ChatGPT, AI assistants, and job displacement.', children: [
                { name: 'AI tools are transforming work before most Israelis are ready',         color: '#4c1d95', base: 22 },
                { name: 'AI assistants are used daily by young Israeli professionals now',       color: '#5b21b6', base: 20 },
                { name: 'AI has permanently displaced entry-level creative jobs in Israel',      color: '#6d28d9', base: 20 },
                { name: 'AI literacy is becoming a survival skill in the Israeli economy',       color: '#7c3aed', base: 20 },
                { name: 'Israeli AI startups are among the most funded in the world',            color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Coding & Tech Skills', color: '#5b21b6', base: 25, desc: 'Bootcamps, tutorials, and no-code tools.', children: [
                { name: 'Coding is the most sought-after skill in the Israeli economy',          color: '#4c1d95', base: 22 },
                { name: 'Bootcamp graduates are flooding a saturated Israeli tech market',       color: '#5b21b6', base: 20 },
                { name: 'Programming tutorials on TikTok have more viewers than university courses', color: '#6d28d9', base: 20 },
                { name: 'No-code tools are making programming irrelevant for many use cases',    color: '#7c3aed', base: 20 },
                { name: 'Teen programmers are building companies before finishing high school',   color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Gadgets & Hardware', color: '#6d28d9', base: 20, desc: 'Smartphones, wearables, and military-to-consumer tech.', children: [
                { name: 'Tech gadget content is among the highest-spending categories on TikTok', color: '#4c1d95', base: 22 },
                { name: 'Israeli consumers are among the first to adopt new hardware globally',  color: '#5b21b6', base: 20 },
                { name: 'Smartphone culture in Israel has reached total saturation',             color: '#6d28d9', base: 20 },
                { name: 'Wearable technology adoption in Israel is above the global average',    color: '#7c3aed', base: 20 },
                { name: 'Military-grade technology is entering consumer markets at record speed', color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Cybersecurity', color: '#7c3aed', base: 15, desc: 'Data breaches, cyber threats, and Israeli expertise.', children: [
                { name: "Israeli cybersecurity expertise is the country's most valuable export", color: '#4c1d95', base: 22 },
                { name: 'Personal data breaches are a daily reality for Israeli internet users', color: '#5b21b6', base: 20 },
                { name: 'Cyber threats against Israel have increased dramatically since October', color: '#6d28d9', base: 20 },
                { name: 'Cybersecurity awareness among civilians is dangerously low',            color: '#7c3aed', base: 20 },
                { name: 'Israeli firms lead global cyber defense despite local talent drain',     color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Future Technology', color: '#8b5cf6', base: 10, desc: 'Biotech, quantum, EVs, and space startups.', children: [
                { name: 'Israeli biotech is at the frontier of the global health revolution',    color: '#4c1d95', base: 22 },
                { name: 'Quantum computing research in Israel leads most European nations',      color: '#5b21b6', base: 20 },
                { name: 'Electric vehicle adoption in Israel is accelerating past expectations', color: '#6d28d9', base: 20 },
                { name: 'Space technology from Israeli startups is competing with global leaders', color: '#7c3aed', base: 20 },
                { name: 'Future tech content in Israel consistently draws top TikTok engagement', color: '#8b5cf6', base: 18 },
            ]},
        ]},
        { name: 'Life Skills & Finance', color: '#5b21b6', base: 25, desc: 'Money, career, productivity, and legal rights.', children: [
            { name: 'Financial Literacy', color: '#4c1d95', base: 30, desc: 'Investing, crypto, debt, and money education.', children: [
                { name: 'Financial illiteracy is a documented crisis among Israeli young adults', color: '#4c1d95', base: 22 },
                { name: 'Investment content is among the fastest growing education categories',  color: '#5b21b6', base: 20 },
                { name: 'Cryptocurrency culture has rebuilt after the 2022 collapse in Israel',  color: '#6d28d9', base: 20 },
                { name: 'Debt and financial survival content dominates the economics category',  color: '#7c3aed', base: 20 },
                { name: 'Young Israelis are learning investing from TikTok not from schools',    color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Career & Work', color: '#5b21b6', base: 25, desc: 'Tech layoffs, remote work, and salary transparency.', children: [
                { name: 'Israeli tech layoffs are reshaping career expectations dramatically',   color: '#4c1d95', base: 22 },
                { name: 'Salary transparency is the most controversial career topic in 2026',    color: '#5b21b6', base: 20 },
                { name: 'Remote work has permanently altered Israeli office culture',            color: '#6d28d9', base: 20 },
                { name: 'Young Israelis are switching careers at an unprecedented rate',         color: '#7c3aed', base: 20 },
                { name: 'LinkedIn growth advice is among the most sought-after career content',  color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Productivity', color: '#6d28d9', base: 20, desc: 'Hustle culture, burnout, and digital tool overload.', children: [
                { name: 'Productivity culture has become a source of anxiety not empowerment',   color: '#4c1d95', base: 22 },
                { name: 'Anti-productivity content is the fastest growing counter-trend',        color: '#5b21b6', base: 20 },
                { name: 'Israeli work culture is caught between startup hustle and burnout',     color: '#6d28d9', base: 20 },
                { name: 'Digital tool stacks are growing faster than anyone can learn them',     color: '#7c3aed', base: 20 },
                { name: 'Productivity gurus have lost credibility with Israeli young adults',    color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Communication & Social Skills', color: '#7c3aed', base: 15, desc: 'Public speaking, workplace norms, and conflict.', children: [
                { name: 'Communication skills content is among the most practical education',    color: '#4c1d95', base: 22 },
                { name: 'Public speaking anxiety is the most commonly addressed skill gap',      color: '#5b21b6', base: 20 },
                { name: 'Social media communication is rewriting professional norms',            color: '#6d28d9', base: 20 },
                { name: 'Israeli workplace communication is notoriously direct and abrasive',    color: '#7c3aed', base: 20 },
                { name: 'Conflict resolution content is the most viewed social skills category', color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Legal Rights', color: '#8b5cf6', base: 10, desc: 'Tenant rights, worker protections, and consumer law.', children: [
                { name: 'Most Israelis are unaware of basic tenant and worker rights',           color: '#4c1d95', base: 22 },
                { name: 'Wartime legal rights are among the least understood by civilians',      color: '#5b21b6', base: 20 },
                { name: 'Reservist legal protections are systematically violated by employers',  color: '#6d28d9', base: 20 },
                { name: 'Consumer rights content is the most practically useful legal education', color: '#7c3aed', base: 20 },
                { name: 'Legal rights awareness is growing fastest among 18-25 year olds',       color: '#8b5cf6', base: 18 },
            ]},
        ]},
        { name: 'Science & Nature', color: '#6d28d9', base: 20, desc: 'Physics, space, climate, biology, and experiments.', children: [
            { name: 'Physical Sciences', color: '#4c1d95', base: 25, desc: 'Physics explainers, chemistry, and Nobel research.', children: [
                { name: 'Physics and chemistry explainers are the most shared science content',  color: '#4c1d95', base: 22 },
                { name: "Israeli Nobel laureates' work is finally reaching mainstream audiences", color: '#5b21b6', base: 20 },
                { name: 'Science communication is improving faster than science education',      color: '#6d28d9', base: 20 },
                { name: '60-second science content outperforms long-form academic explanations', color: '#7c3aed', base: 20 },
                { name: 'Counterintuitive physics facts are the most viral science content',     color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Space & Astronomy', color: '#5b21b6', base: 20, desc: 'Israeli space programs, amateur astronomy, and SpaceX.', children: [
                { name: 'Space content spikes in Israel following every geopolitical event',     color: '#4c1d95', base: 22 },
                { name: 'Israeli space programs are underfunded relative to national ambition',  color: '#5b21b6', base: 20 },
                { name: 'Amateur astronomy is growing rapidly among Israeli youth',              color: '#6d28d9', base: 20 },
                { name: 'Space exploration news provides escapism during wartime',               color: '#7c3aed', base: 20 },
                { name: 'SpaceX and Israeli space ventures are the most watched STEM content',   color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Environment & Climate', color: '#6d28d9', base: 20, desc: 'Climate anxiety, water tech, and Dead Sea crisis.', children: [
                { name: 'Climate anxiety is measurably higher among Israeli youth than parents', color: '#4c1d95', base: 22 },
                { name: "Israel's water technology is the most celebrated environmental achievement", color: '#5b21b6', base: 20 },
                { name: 'Environmental activism has been overshadowed by security concerns',     color: '#6d28d9', base: 20 },
                { name: 'The Dead Sea water level decline is a visible daily crisis',            color: '#7c3aed', base: 20 },
                { name: 'Air quality in Israeli cities is among the most searched health topics', color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Human Biology', color: '#7c3aed', base: 20, desc: 'Body facts, stress biology, and medical research.', children: [
                { name: 'Human body fact content is consistently among the most viral education', color: '#4c1d95', base: 22 },
                { name: 'Mental-physical health connections dominate biology content',           color: '#5b21b6', base: 20 },
                { name: 'Wartime stress biology content is a unique Israeli viral category',     color: '#6d28d9', base: 20 },
                { name: 'Nutrition-cognition connections are the most searched biology topics',  color: '#7c3aed', base: 20 },
                { name: 'Israeli medical research results are reaching public audiences faster',  color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Experiments & DIY Science', color: '#8b5cf6', base: 15, desc: 'Home experiments, kids science, and STEM.', children: [
                { name: 'Home science experiments are among the most viewed education content',  color: '#4c1d95', base: 22 },
                { name: 'Science content aimed at children is growing as parents seek tools',    color: '#5b21b6', base: 20 },
                { name: 'Chemistry experiments are the most dangerous and viral category',       color: '#6d28d9', base: 20 },
                { name: 'Israeli youth science competitions are underrepresented on TikTok',     color: '#7c3aed', base: 20 },
                { name: 'Science experiment content is the top gateway to STEM careers',         color: '#8b5cf6', base: 18 },
            ]},
        ]},
        { name: 'History & Society', color: '#7c3aed', base: 15, desc: 'Israeli history, Jewish heritage, and culture.', children: [
            { name: 'Israeli History', color: '#4c1d95', base: 30, desc: 'Oct 7 analysis, Zionism, IDF founding, and Holocaust.', children: [
                { name: 'October 7th historical analysis is the most contested history content', color: '#4c1d95', base: 22 },
                { name: 'Pre-state Zionist history is experiencing a nationalist revival',       color: '#5b21b6', base: 20 },
                { name: 'Israeli history is being rewritten through conflicting digital narratives', color: '#6d28d9', base: 20 },
                { name: 'IDF founding stories are reaching record engagement in wartime',        color: '#7c3aed', base: 20 },
                { name: 'The Holocaust remains the most sensitive historical topic on Israeli TikTok', color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Jewish Heritage', color: '#5b21b6', base: 25, desc: 'Sephardic history, diaspora culture, and archaeology.', children: [
                { name: 'Sephardic and Mizrahi heritage is the most underrepresented in history', color: '#4c1d95', base: 22 },
                { name: 'Diaspora Jewish culture is being rediscovered by Israeli youth',        color: '#5b21b6', base: 20 },
                { name: 'Religious tradition and modern identity are in open dialogue on TikTok', color: '#6d28d9', base: 20 },
                { name: 'Jewish heritage content spikes during wartime as identity consolidates', color: '#7c3aed', base: 20 },
                { name: 'Archaeological discoveries in Israel are rewriting textbook histories',  color: '#8b5cf6', base: 18 },
            ]},
            { name: 'World History', color: '#6d28d9', base: 20, desc: 'Colonialism debates, WWII parallels, and 60s history.', children: [
                { name: 'World history content peaks when it connects to current Israeli events', color: '#4c1d95', base: 22 },
                { name: 'Colonialism debates are the most contested history topic on Israeli TikTok', color: '#5b21b6', base: 20 },
                { name: 'WWII and Holocaust comparisons dominate political history content',      color: '#6d28d9', base: 20 },
                { name: 'Ancient civilization content is the most purely educational category',  color: '#7c3aed', base: 20 },
                { name: 'History in 60 seconds is the dominant world history content format',    color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Society & Culture', color: '#7c3aed', base: 15, desc: 'Polarization, ethnic gaps, and generational divides.', children: [
                { name: 'Israeli society is more polarized than at any point in the last decade', color: '#4c1d95', base: 22 },
                { name: 'The cultural gap between secular and religious is growing visibly',     color: '#5b21b6', base: 20 },
                { name: 'Ethiopian and Russian immigrant communities are gaining cultural voice', color: '#6d28d9', base: 20 },
                { name: 'The periphery-center divide is the most powerful social tension in 2026', color: '#7c3aed', base: 20 },
                { name: 'Generational differences in values are sharper than ethnic divides',    color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Language & Linguistics', color: '#8b5cf6', base: 10, desc: 'Hebrew slang, Arabic influence, and English gaps.', children: [
                { name: 'Hebrew slang evolves faster through TikTok than through any other medium', color: '#4c1d95', base: 22 },
                { name: 'Arabic words are entering Israeli Hebrew at an accelerating rate',      color: '#5b21b6', base: 20 },
                { name: 'English fluency divides Israeli youth by socioeconomic class',          color: '#6d28d9', base: 20 },
                { name: 'Language learning content is among the most practical education',       color: '#7c3aed', base: 20 },
                { name: 'Hebrew preservation content is growing as digital communication shifts', color: '#8b5cf6', base: 18 },
            ]},
        ]},
        { name: 'Podcasts & Deep Dives', color: '#8b5cf6', base: 10, desc: 'News analysis, interviews, true crime, and debate.', children: [
            { name: 'News & Current Events', color: '#4c1d95', base: 30, desc: 'War analysis podcasts and independent journalism.', children: [
                { name: 'Podcast clips about the war dominate the news deep-dive category',      color: '#4c1d95', base: 22 },
                { name: 'Long-form analysis on TikTok is outperforming news broadcasts',         color: '#5b21b6', base: 20 },
                { name: 'Israeli podcast culture has matured into a mainstream media format',    color: '#6d28d9', base: 20 },
                { name: 'Weekly war analysis podcasts have millions of regular Israeli listeners', color: '#7c3aed', base: 20 },
                { name: 'Independent podcast journalists have more credibility than major outlets', color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Interviews & Profiles', color: '#5b21b6', base: 25, desc: 'IDF officers, survivors, and tech founders.', children: [
                { name: "IDF officers' post-service interviews are the most watched content",    color: '#4c1d95', base: 22 },
                { name: 'Scientist and researcher interview clips are underperforming their potential', color: '#5b21b6', base: 20 },
                { name: 'Political interview excerpts are the most shared long-form content',    color: '#6d28d9', base: 20 },
                { name: 'Survivor and hostage family interviews draw the highest emotional engagement', color: '#7c3aed', base: 20 },
                { name: 'Tech founder interviews dominate the career and business category',     color: '#8b5cf6', base: 18 },
            ]},
            { name: 'True Crime & Mystery', color: '#6d28d9', base: 20, desc: 'Cold cases, crime podcasts, and conflict-zone crime.', children: [
                { name: 'Israeli true crime content is a growing but underdeveloped category',   color: '#4c1d95', base: 22 },
                { name: 'Cold case content drives deeper engagement than recent crime coverage', color: '#5b21b6', base: 20 },
                { name: 'True crime podcasts are among the most popular long-form content',      color: '#6d28d9', base: 20 },
                { name: 'Crime in conflict zones blurs the line between crime and war content',  color: '#7c3aed', base: 20 },
                { name: 'Israeli audience appetite for true crime matches global patterns',      color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Philosophy & Ideas', color: '#7c3aed', base: 15, desc: 'War ethics, stoicism, and moral debates.', children: [
                { name: 'Ethical questions about war are the most viral philosophy content',     color: '#4c1d95', base: 22 },
                { name: 'Israeli public intellectuals are thriving in the podcast ecosystem',    color: '#5b21b6', base: 20 },
                { name: 'Stoicism and resilience philosophy is the dominant ideological trend',  color: '#6d28d9', base: 20 },
                { name: 'Moral debates about military action drive the most discussion',         color: '#7c3aed', base: 20 },
                { name: 'Philosophy content connecting to current events dominates the genre',   color: '#8b5cf6', base: 18 },
            ]},
            { name: 'Debate & Discourse', color: '#8b5cf6', base: 10, desc: 'Structured debates and cross-ideological dialogue.', children: [
                { name: 'Structured debate content gets higher engagement than monologue opinion', color: '#4c1d95', base: 22 },
                { name: 'Israeli political debate is the most contested and followed content',   color: '#5b21b6', base: 20 },
                { name: 'Academic debate formats are gaining mainstream appeal in 2026',         color: '#6d28d9', base: 20 },
                { name: 'Cross-ideological dialogue content is rare but highly valued',          color: '#7c3aed', base: 20 },
                { name: 'Debate content between opposing wartime narratives draws peak audiences', color: '#8b5cf6', base: 18 },
            ]},
        ]},
    ]},
    { name: '⚽ Leisure & Sports', color: '#06b6d4', base: 6, desc: 'Football, fitness, and specific hobbies.', children: [
        { name: 'Football (Soccer)', color: '#164e63', base: 30, desc: 'Israeli leagues, international, fans, and tactics.', children: [
            { name: 'Israeli Leagues', color: '#164e63', base: 25, desc: 'Premier League, Maccabi, Hapoel, and national team.', children: [
                { name: 'Maccabi Tel Aviv dominates the Premier League by a historic margin',         color: '#164e63', base: 25 },
                { name: 'Hapoel clubs are the working-class heart of Israeli football culture',       color: '#155e75', base: 22 },
                { name: 'Israeli Premier League attendance is at a decade-low in wartime',            color: '#0e7490', base: 20 },
                { name: 'National team qualification attempts are the most watched Israeli sports',   color: '#0891b2', base: 18 },
                { name: 'Corruption in Israeli football is a permanent topic of public outrage',      color: '#06b6d4', base: 15 },
            ]},
            { name: 'International Football', color: '#155e75', base: 25, desc: 'Champions League, Premier League, and transfers.', children: [
                { name: 'Champions League nights unite Israelis across political divides',            color: '#164e63', base: 25 },
                { name: 'Premier League is watched more than Israeli league by young Israelis',       color: '#155e75', base: 22 },
                { name: 'Israeli fans of international clubs outnumber domestic club fans',           color: '#0e7490', base: 20 },
                { name: 'Transfer window content generates peak football engagement in Israel',       color: '#0891b2', base: 18 },
                { name: 'Israeli player exclusions from international play stir national outrage',    color: '#06b6d4', base: 15 },
            ]},
            { name: 'Fan Culture', color: '#0e7490', base: 20, desc: 'Ultras, stadium life, rivalries, and fantasy football.', children: [
                { name: 'Israeli football ultras culture is intense and politically charged',         color: '#164e63', base: 25 },
                { name: 'Stadium experience is being replaced by home viewing for younger fans',      color: '#155e75', base: 22 },
                { name: 'Fan content creators have become more influential than club accounts',       color: '#0e7490', base: 20 },
                { name: 'Football rivalries carry ethnic and political undertones that never fade',   color: '#0891b2', base: 18 },
                { name: 'Fantasy football culture is the most participatory Israeli sports format',   color: '#06b6d4', base: 15 },
            ]},
            { name: 'Youth Development', color: '#0891b2', base: 15, desc: 'Academies, young talent, and European signings.', children: [
                { name: 'Israeli youth football academies are producing global-level talent',         color: '#164e63', base: 25 },
                { name: 'TikTok talent scouts are discovering Israeli players before clubs',          color: '#155e75', base: 22 },
                { name: 'Youth football infrastructure in the periphery lags the center',            color: '#0e7490', base: 20 },
                { name: 'Young Israeli players are signing European contracts at earlier ages',       color: '#0891b2', base: 18 },
                { name: "Girls' football growth is the biggest positive trend in Israeli youth sports", color: '#06b6d4', base: 15 },
            ]},
            { name: 'Coaches & Tactics', color: '#06b6d4', base: 15, desc: 'Tactical analysis, Israeli coaches abroad.', children: [
                { name: 'Tactical analysis content is the fastest growing football education format', color: '#164e63', base: 25 },
                { name: 'Israeli coaches are finding success in European leagues',                    color: '#155e75', base: 22 },
                { name: 'National team coaching choices are the most debated sports topic',           color: '#0e7490', base: 20 },
                { name: 'Tactical evolution in Israeli football is documented on TikTok daily',       color: '#0891b2', base: 18 },
                { name: 'The gap between Israeli and top European coaching is narrowing',             color: '#06b6d4', base: 15 },
            ]},
        ]},
        { name: 'Fitness & Training', color: '#155e75', base: 25, desc: 'Gym culture, running, CrossFit, yoga, and transformations.', children: [
            { name: 'Strength & Bodybuilding', color: '#164e63', base: 25, desc: 'Gym culture, steroids debate, and female bodybuilding.', children: [
                { name: 'Israeli gym culture is thriving despite economic pressure',                  color: '#164e63', base: 25 },
                { name: 'Bodybuilding content is among the most watched fitness formats',             color: '#155e75', base: 22 },
                { name: 'Steroid culture in Israeli fitness is discussed more openly than elsewhere', color: '#0e7490', base: 20 },
                { name: 'Strength training is displacing cardio as the dominant fitness focus',       color: '#0891b2', base: 18 },
                { name: 'Female bodybuilding content is the fastest growing fitness subcategory',     color: '#06b6d4', base: 15 },
            ]},
            { name: 'Running & Endurance', color: '#155e75', base: 20, desc: 'Marathons, ultra-endurance, and running communities.', children: [
                { name: 'Israeli marathon culture is experiencing its biggest growth in a decade',    color: '#164e63', base: 25 },
                { name: 'Running has become an act of defiance and resilience for many Israelis',    color: '#155e75', base: 22 },
                { name: 'Tel Aviv marathon is among the most internationally attended events',        color: '#0e7490', base: 20 },
                { name: 'Ultra-endurance events are attracting more Israelis than ever',              color: '#0891b2', base: 18 },
                { name: 'Running communities provide social connection in fragmented wartime society', color: '#06b6d4', base: 15 },
            ]},
            { name: 'CrossFit & Functional', color: '#0e7490', base: 20, desc: 'CrossFit competitions, IDF training, and community.', children: [
                { name: 'CrossFit culture has embedded itself permanently in Israeli fitness',        color: '#164e63', base: 25 },
                { name: 'Functional fitness philosophy is reshaping IDF training programs',           color: '#155e75', base: 22 },
                { name: 'CrossFit competitions are the most watched Israeli sports events',           color: '#0e7490', base: 20 },
                { name: 'Female CrossFit athletes are the dominant content creators in Israel',       color: '#0891b2', base: 18 },
                { name: 'CrossFit community culture fills social gap for reservists post-service',    color: '#06b6d4', base: 15 },
            ]},
            { name: 'Yoga & Flexibility', color: '#0891b2', base: 20, desc: 'Yoga mainstream boom and wartime stress relief.', children: [
                { name: 'Yoga has moved from alternative to mainstream in Israeli culture',           color: '#164e63', base: 25 },
                { name: 'Wartime stress is driving unprecedented yoga participation',                 color: '#155e75', base: 22 },
                { name: 'Israeli yoga teachers are building global TikTok audiences',                 color: '#0e7490', base: 20 },
                { name: 'Flexibility content gets more female engagement than any other fitness',     color: '#0891b2', base: 18 },
                { name: 'Yoga retreats are fully booked as Israelis seek mental recovery',            color: '#06b6d4', base: 15 },
            ]},
            { name: 'Body Transformation', color: '#06b6d4', base: 15, desc: 'Before-and-after stories and body positivity debate.', children: [
                { name: 'Before-and-after transformation content is the most viral fitness format',   color: '#164e63', base: 25 },
                { name: 'Israeli transformation stories connect physical change to wartime resilience', color: '#155e75', base: 22 },
                { name: 'Body transformation culture is being criticized for toxic standards',        color: '#0e7490', base: 20 },
                { name: 'Weight loss content is declining relative to strength gain content',         color: '#0891b2', base: 18 },
                { name: 'Mental transformation stories are outperforming physical ones in engagement', color: '#06b6d4', base: 15 },
            ]},
        ]},
        { name: 'E-Sports & Gaming', color: '#0e7490', base: 20, desc: 'PC, mobile, competitions, streaming, and culture.', children: [
            { name: 'PC & Console Gaming', color: '#164e63', base: 25, desc: 'Israeli game devs, gaming cafes, and live streams.', children: [
                { name: 'Israeli gaming culture has matured into a professional industry',            color: '#164e63', base: 25 },
                { name: 'Console gaming is gaining market share from mobile in Israel',               color: '#155e75', base: 22 },
                { name: 'Gaming marathons and live streams dominate late-night Israeli TikTok',       color: '#0e7490', base: 20 },
                { name: 'Israeli game developers are producing globally competitive titles',          color: '#0891b2', base: 18 },
                { name: 'Gaming cafes are experiencing a surprise revival in Israeli cities',         color: '#06b6d4', base: 15 },
            ]},
            { name: 'Mobile Gaming', color: '#155e75', base: 25, desc: 'Casual games, Israeli companies, and mobile esports.', children: [
                { name: 'Mobile gaming is the dominant gaming format in Israel',                      color: '#164e63', base: 25 },
                { name: 'Israeli mobile gaming companies are among the most profitable globally',     color: '#155e75', base: 22 },
                { name: 'Casual mobile games are the most widely played by non-gamer demographics',  color: '#0e7490', base: 20 },
                { name: 'Mobile esports is gaining prize pools that rival console competitions',      color: '#0891b2', base: 18 },
                { name: 'Game monetization practices are the most complained-about topic in gaming',  color: '#06b6d4', base: 15 },
            ]},
            { name: 'E-Sports Competitions', color: '#0e7490', base: 20, desc: 'Israeli teams, prize pools, and global qualifiers.', children: [
                { name: 'Israeli e-sports teams are qualifying for international championships',      color: '#164e63', base: 25 },
                { name: 'E-sports prize pools in Israel are growing faster than physical sports',    color: '#155e75', base: 22 },
                { name: 'E-sports viewership is outpacing traditional sports among under-20s',       color: '#0e7490', base: 20 },
                { name: 'Team Israel is competing at the highest global e-sports levels',             color: '#0891b2', base: 18 },
                { name: 'Corporate investment in Israeli e-sports is at an all-time high',            color: '#06b6d4', base: 15 },
            ]},
            { name: 'Streaming & Content', color: '#0891b2', base: 20, desc: 'Twitch streamers, reactions, and micro-celebrity.', children: [
                { name: 'Gaming streamers are among the most loyally followed creators in Israel',   color: '#164e63', base: 25 },
                { name: 'Streamer drama generates as much engagement as gameplay content',            color: '#155e75', base: 22 },
                { name: 'Israeli streamers are building international audiences on Twitch',           color: '#0e7490', base: 20 },
                { name: 'Gaming reaction content is the second-most watched gaming format',          color: '#0891b2', base: 18 },
                { name: 'Live streaming culture has created a new class of Israeli micro-celebrity',  color: '#06b6d4', base: 15 },
            ]},
            { name: 'Gaming Culture', color: '#06b6d4', base: 10, desc: 'Youth identity, wartime refuge, and IDF gaming.', children: [
                { name: 'Gaming culture is the dominant youth cultural identity in 2026',             color: '#164e63', base: 25 },
                { name: 'The stereotype of the antisocial gamer has completely dissolved',            color: '#155e75', base: 22 },
                { name: 'Gaming communities are the primary social spaces for many Israeli youth',    color: '#0e7490', base: 20 },
                { name: 'Gaming during wartime provides psychological refuge for civilians',           color: '#0891b2', base: 18 },
                { name: 'IDF gaming culture has generated a unique and widely shared content genre',  color: '#06b6d4', base: 15 },
            ]},
        ]},
        { name: 'Outdoor & Adventure', color: '#0891b2', base: 15, desc: 'Hiking, water sports, extreme sports, and cycling.', children: [
            { name: 'Hiking & Nature', color: '#164e63', base: 30, desc: 'Israel Trail, nature therapy, and wartime hiking.', children: [
                { name: "Israel's hiking trails are at record visitor levels in wartime",             color: '#164e63', base: 25 },
                { name: 'The Israel National Trail is among the most documented paths on TikTok',    color: '#155e75', base: 22 },
                { name: 'Nature content provides the most reliable mood lift on Israeli TikTok',     color: '#0e7490', base: 20 },
                { name: 'Birdwatching and ecology content is growing among Israeli adults',           color: '#0891b2', base: 18 },
                { name: 'Northern Israel hiking has been disrupted by security incidents',            color: '#06b6d4', base: 15 },
            ]},
            { name: 'Water Sports', color: '#155e75', base: 25, desc: 'Surfing, diving, windsurfing, and Eilat marine life.', children: [
                { name: 'Mediterranean surfing culture in Israel is thriving in 2026',               color: '#164e63', base: 25 },
                { name: 'Israeli divers are exploring heritage sites below the water line',           color: '#155e75', base: 22 },
                { name: 'Windsurfing and kitesurfing are the dominant extreme water sports',          color: '#0e7490', base: 20 },
                { name: 'Kayaking and river sports are the most accessible outdoor adventures',       color: '#0891b2', base: 18 },
                { name: 'Eilat marine experiences are the most documented underwater content',        color: '#06b6d4', base: 15 },
            ]},
            { name: 'Extreme Sports', color: '#0e7490', base: 20, desc: 'Skydiving, rock climbing, and veteran adrenaline.', children: [
                { name: 'Extreme sports participation spikes in post-combat veteran demographics',    color: '#164e63', base: 25 },
                { name: 'Skydiving and paragliding bookings are at record highs in Israel',          color: '#155e75', base: 22 },
                { name: 'Rock climbing is the fastest growing outdoor sport in urban Israel',        color: '#0e7490', base: 20 },
                { name: 'Mountain biking is converting road cyclists in record numbers',              color: '#0891b2', base: 18 },
                { name: 'Extreme sports content consistently outperforms all other outdoor categories', color: '#06b6d4', base: 15 },
            ]},
            { name: 'Cycling', color: '#0891b2', base: 15, desc: 'E-bikes, Tel Aviv cycling, and infrastructure gaps.', children: [
                { name: 'Tel Aviv is becoming one of the most cycle-friendly cities in the region',  color: '#164e63', base: 25 },
                { name: 'E-bike culture has permanently shifted Israeli urban commuting habits',      color: '#155e75', base: 22 },
                { name: 'Cycling tourism is connecting Israeli cities and rural communities',         color: '#0e7490', base: 20 },
                { name: 'The Tel Aviv-Jerusalem cycling route is the most documented trek',           color: '#0891b2', base: 18 },
                { name: 'Cycling infrastructure investment is lagging far behind demand',             color: '#06b6d4', base: 15 },
            ]},
            { name: 'Combat Sports', color: '#06b6d4', base: 10, desc: 'Krav Maga, MMA, boxing, and judo culture.', children: [
                { name: 'Israeli combat sports culture is inseparable from military identity',        color: '#164e63', base: 25 },
                { name: 'Krav Maga is the most internationally recognized Israeli cultural export',   color: '#155e75', base: 22 },
                { name: 'Mixed martial arts viewership in Israel is growing at 40% annually',         color: '#0e7490', base: 20 },
                { name: 'Boxing culture is thriving in peripheral cities more than major centers',    color: '#0891b2', base: 18 },
                { name: 'Judo and wrestling have the strongest youth infrastructure in Israeli sports', color: '#06b6d4', base: 15 },
            ]},
        ]},
        { name: 'Basketball & Other', color: '#06b6d4', base: 10, desc: 'Basketball, tennis, Olympics, fantasy, and underdogs.', children: [
            { name: 'Basketball', color: '#164e63', base: 30, desc: 'Maccabi TLV, Euroleague, NBA Israelis, and street ball.', children: [
                { name: 'Maccabi Tel Aviv is the most internationally recognized Israeli sports brand', color: '#164e63', base: 25 },
                { name: 'Euroleague basketball is the most watched live sports event in Israel',      color: '#155e75', base: 22 },
                { name: 'Israeli NBA players are the country\'s most globally visible athletes',      color: '#0e7490', base: 20 },
                { name: 'Street basketball culture is thriving in Israeli periphery cities',           color: '#0891b2', base: 18 },
                { name: "Women's basketball in Israel is underfunded relative to its talent base",    color: '#06b6d4', base: 15 },
            ]},
            { name: 'Tennis & Racket Sports', color: '#155e75', base: 20, desc: 'Top-50 players, padel boom, and boycotts.', children: [
                { name: 'Israeli tennis is the most globally successful individual sport',            color: '#164e63', base: 25 },
                { name: 'Padel tennis is the fastest growing new sport in Israel in 2026',            color: '#155e75', base: 22 },
                { name: 'Israeli players face recurring boycotts in international competition',        color: '#0e7490', base: 20 },
                { name: 'Tennis academies are producing talent faster than courts can accommodate',   color: '#0891b2', base: 18 },
                { name: 'Israeli players are ranked among the top 50 in the world right now',         color: '#06b6d4', base: 15 },
            ]},
            { name: 'Olympic Sports', color: '#0e7490', base: 20, desc: 'Medal ambitions, Paralympic pride, and funding cuts.', children: [
                { name: 'Israeli Olympic athletes are building TikTok followings before events',      color: '#164e63', base: 25 },
                { name: 'Olympic medal ambitions are the most unifying Israeli sports narrative',     color: '#155e75', base: 22 },
                { name: 'Israeli athletes competing under restrictions are symbols of resilience',    color: '#0e7490', base: 20 },
                { name: 'Olympic sports funding is being redirected to security during wartime',      color: '#0891b2', base: 18 },
                { name: 'Paralympic achievement is the most emotionally powerful Israeli sports content', color: '#06b6d4', base: 15 },
            ]},
            { name: 'Fantasy & Betting', color: '#0891b2', base: 20, desc: 'Fantasy leagues, sports betting, and gambling risks.', children: [
                { name: 'Fantasy sports culture is the most participatory sports engagement format',  color: '#164e63', base: 25 },
                { name: 'Sports betting culture in Israel operates in a regulatory grey zone',        color: '#155e75', base: 22 },
                { name: 'Fantasy leagues are bringing non-sports fans into sports communities',       color: '#0e7490', base: 20 },
                { name: 'Problem gambling in Israeli sports culture is an underdiscussed crisis',     color: '#0891b2', base: 18 },
                { name: 'Fantasy football points obsession is the dominant Israeli sports conversation', color: '#06b6d4', base: 15 },
            ]},
            { name: 'Underdog Stories', color: '#06b6d4', base: 10, desc: 'Amateur heroes, disability sports, and female athletes.', children: [
                { name: 'Underdog victories are the most emotionally resonant sports content',        color: '#164e63', base: 25 },
                { name: 'Local amateur athletes outperform professionals in viral reach',              color: '#155e75', base: 22 },
                { name: 'Athletes from conflict-affected communities are the most inspiring content', color: '#0e7490', base: 20 },
                { name: 'Female underdog stories outperform male equivalent content significantly',   color: '#0891b2', base: 18 },
                { name: 'Disability sports achievements are the most shared underdog narrative',      color: '#06b6d4', base: 15 },
            ]},
        ]},
    ]},
];

const SCENARIOS = [
    { label: 'All',             seeds: [38, 26, 21,  9,  6] },
    { label: 'Arabs',           seeds: [40, 24, 21,  9,  6] },
    { label: 'Pre-Draft Youth', seeds: [36, 28, 21,  9,  6] },
    { label: 'Ultra-Orthodox',  seeds: [35, 26, 21, 11,  7] },
    { label: 'High Income',     seeds: [37, 27, 21,  9,  6] },
    { label: 'Students',        seeds: [35, 26, 21, 12,  6] },
];

// ── Continuous time-range slider helpers ──
function sliderToDays(val) {
    // Logarithmic mapping: 0→1 day, 1000→1825 days (5y)
    return Math.max(1, Math.round(Math.exp(Math.log(1825) * val / 1000)));
}
function daysToSlider(days) {
    return Math.round(Math.log(Math.max(1, days)) / Math.log(1825) * 1000);
}
function computeRangeParams(days) {
    return {
        days,
        points: 12,
        jitter: Math.max(0.05, Math.pow(days / 90, 0.5))
    };
}
function rangeLabel(days) {
    if (days <= 1)   return 'Last 24 hours';
    if (days <= 6)   return 'Last ' + days + ' days';
    if (days <= 13)  return 'Last week';
    if (days <= 20)  return 'Last 2 weeks';
    if (days <= 45)  return 'Last month';
    if (days <= 75)  return 'Last 2 months';
    if (days <= 105) return 'Last 3 months';
    if (days <= 150) return 'Last ' + Math.round(days / 30) + ' months';
    if (days <= 320) return 'Last ' + Math.round(days / 30) + ' months';
    if (days <= 540) return 'Last year';
    if (days <= 900) return 'Last 2 years';
    return 'Last ' + Math.round(days / 365) + ' years';
}

let curRange = computeRangeParams(90); // default ~3 months
let lastPieSlices = []; // [{startAngle, endAngle, name, ex, ey}] for tooltip hit-test

let TOTAL_POINTS  = curRange.points;
let VISIBLE_POINTS = TOTAL_POINTS;
const TODAY_IDX = 8; // 9th point (0-based) = "today"; points after are projections
function getPieRadius() {
    const dpr = window.devicePixelRatio || 1;
    return (pieCanvas.width / dpr) * 0.42;
}
const PIE_HOLE   = 0.52;

// Neon-tech palette — max hue separation, luminous on dark
const SERIES_COLORS = ['#f59e0b', '#3b82f6', '#ec4899', '#06b6d4', '#a855f7', '#facc15', '#8b5cf6', '#2dd4bf', '#f97316', '#38bdf8'];

// ==================== STATE ====================
let currentScenario = 0;
let dataStreams = [];
let dataColors  = []; // computed per-series color (blue=rising, yellow=falling)
let offset = 0;
let topTwoChangers = new Set();
let seriesDeltas = [];
let todayOriginal = []; // anchor values at TODAY_IDX for tick oscillation
let mouseX = -1;
let mouseY = -1;
let mouseInside = false;
let animFrame;
let scanProgress = 0;
let scanActive = true;
let scanStartTime = 0;
const SCAN_SWEEP = 6000;   // 6s per sweep
const SCAN_PAUSE = 1500;   // 1.5s pause at each edge
const SCAN_CYCLE = SCAN_SWEEP + SCAN_PAUSE + SCAN_SWEEP + SCAN_PAUSE; // 18s total
let drilldownPath = [];
let desireViewMode = false;
let activeDesire = null;
let desireViewOwnerPath = [];
let narrativeViewMode = false;
let activeNarrativeIdx = null;
let narrativeViewOwnerPath = [];

// ==================== ACTIVE SERIES ====================
function getActiveSeries() {
    if (desireViewMode && activeDesire) {
        return [
            ...activeDesire.narratives,
            { name: activeDesire.label, base: 0, color: '#ffffff', isDesireAggregate: true }
        ];
    }
    let current = SERIES;
    for (const idx of drilldownPath) current = current[idx].children;
    return current;
}

function isLeafLevel() {
    if (desireViewMode) return false;
    if (drilldownPath.length === 0) return false;
    const active = getActiveSeries();
    return active.length > 0 && active.every(s => !s.children);
}

// ==================== CANVAS SETUP ====================
const canvas = document.getElementById('mainChart');
const ctx = canvas.getContext('2d');
const pieCanvas = document.getElementById('pieCanvas');
const pieCtx = pieCanvas.getContext('2d');

function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = Math.max(200, rect.width - 48);
    const dpr = window.devicePixelRatio || 1;
    // Derive chart height from pie size, minus extra elements below canvas
    const pieContainer = document.querySelector('.pie-container');
    const pieW = pieContainer ? pieContainer.clientWidth : 300;
    const pieSize = Math.min(pieW - 20, 400);
    const chartContainer = canvas.parentElement;
    const extras = chartContainer.querySelector('.time-range-bar');
    const hint = chartContainer.querySelector('.hint');
    const extraH = (extras ? extras.offsetHeight + 12 : 42) + (hint ? hint.offsetHeight + 14 : 28);
    const h = Math.max(200, pieSize - extraH);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initPieCanvas();
}

window.addEventListener('resize', () => { resize(); draw(); });

// ==================== DATA GENERATION ====================
function smoothStep(t) { return t * t * (3 - 2 * t); }

function buildStream(keyPoints) {
    const result = [];
    for (let i = 0; i < TOTAL_POINTS; i++) {
        const t = i / (TOTAL_POINTS - 1);
        let s = 0;
        while (s < keyPoints.length - 2 && keyPoints[s + 1].t <= t) s++;
        const a = keyPoints[s], b = keyPoints[s + 1];
        const lt = (t - a.t) / (b.t - a.t);
        result.push(a.v + (b.v - a.v) * smoothStep(lt));
    }
    return result;
}

// ── Operation Lion's Roar spike (Feb 28, 2026) ──
// All delta arrays sum to 0 so total across series stays = 100%.
const OP_DAYS_AGO = 4; // Feb 28 → Mar 4 = 4 days ago

// ── Per-leaf organic trends (3-month trajectory before the operation) ──
// Positive = rising on TikTok, negative = falling. Range ≈ -15 to +15.
// These do NOT need to sum to 0 — they are independent trajectories.
const LEAF_TRENDS = {
    // ── SECURITY (dp[1]=0) ──
    '2,0,1': [-5, 10, 12, -3,  5,  8],        // Gaza War (6 items)
    '2,0,2': [-8, -5,  8, -3, 12],            // October 7 (5 items)
    '2,0,3': [-8, -3, -5,  5, 10],            // Hostages (5 items)
    '2,0,4': [-5, -3, -8, 10,  8,  0],        // Home Front (6 items, last born)
    '2,0,5': [-3,  8, 12,  5, 10,  0],        // IDF Service (6 items, last born)
    '2,0,6': [ 8, 12, -5,-10, -3],            // Northern Border (5 items)
    '2,0,0':   [ 5, -3,  8, -5, -5],           // Iran narratives (5 items)

    // ── POLITICS (dp[1]=1) ──
    '2,1,0': [12, -5, -8,  3, 10,-12],        // Government (6 items)
    '2,1,1': [-5, -3,  8, -5,  5],            // Courts (5 items)
    '2,1,2': [10,  8,  5, -8,-15],            // Coalition (5 items)
    '2,1,3': [12, -8,  5,  3,-12],            // Elections (5 items)
    '2,1,4': [10, -8,  5,  8,-15],            // Religion & State (5 items)
    '2,1,5': [12,-10, 10, -8, -3],            // Haredi Draft (5 items)

    // ── SOCIETY (dp[1]=2) ──
    '2,2,0': [ 8,  5, -3, -5, -5],            // Feminism (5 items)
    '2,2,1': [-5, -8,  5, -3, 12],            // Arab-Jewish (5 items)
    '2,2,2': [-8, 12, -5, 10, -8],            // Immigration (5 items)
    '2,2,3': [-5, 10, -8,  8, -5],            // Equality (5 items)
    '2,2,4': [ 5, -5,  3, -8,  5],            // Jewish Identity (5 items)
    '2,2,5': [-5,  8, 10, -8, -5],            // Social Protest (5 items)
    '2,2,6': [-8, 10, -5,  8, -5],            // Education (5 items)

    // ── COST OF LIVING (dp[1]=3) ──
    '2,3,0': [12,  5, -8,  3,-10],            // Housing (5 items)
    '2,3,1': [10,  8,  5, -8,-15],            // Supermarket Prices (5 items)
    '2,3,2': [-5, 10,  8, -8, -5],            // High-Tech (5 items)
    '2,3,3': [12,  8,  5,-10,-15],            // State Budget (5 items)
    '2,3,4': [ 8,  5, -5, -8,  0],            // Banking (5 items)
    '2,3,5': [10,  8, -5,  3,-15],            // Employment (5 items)
    '2,3,6': [ 5,  8, 10, -8,-15],            // Healthcare (5 items)

    // ── CRIME (dp[1]=4) ──
    '2,4,0': [12,  8,  5,-10,-15],            // Organized Crime (5 items)
    '2,4,1': [ 8, 10, -5,  5, -8],            // Police (5 items)
    '2,4,2': [10,  8,  5, -8,-15],            // Street Violence (5 items)
    '2,4,3': [ 8, 10, -5,  5, -8],            // Cybercrime (5 items)
    '2,4,4': [10,  5,  8, -8,-15],            // Agricultural Crime (5 items)
};

function daysAgoToIndex(daysAgo) {
    const range = curRange;
    if (daysAgo > range.days) return -1;
    return Math.round(TODAY_IDX * (range.days - daysAgo) / range.days);
}

function getLionRoarDeltas(active) {
    if (desireViewMode) return active.map(() => 0);
    const dp = drilldownPath;
    // Top level
    if (dp.length === 0) {
        const map = { 'Current Affairs': 9, 'Entertainment & Music': -4,
                      'Lifestyle & Food': -3, 'Education & Knowledge': -1, 'Leisure & Sports': -1 };
        return active.map(s => map[s.name] ?? 0);
    }
    // Current Affairs sub-domains (bases: 30+22+15+20+13 = 100)
    if (dp.length === 1 && dp[0] === 2) {
        const map = { 'Security': 9, 'Politics': 1, 'Society': -2,
                      'Cost of Living': -5, 'Crime': -3 };
        return active.map(s => map[s.name] ?? 0);
    }
    // Security sub-topics (bases: 13+25+20+15+10+10+7 = 100)
    if (dp.length === 2 && dp[0] === 2 && dp[1] === 0) {
        const map = { 'Iran': 18, 'Home Front': 5, 'The Gaza War': -8,
                      'October 7': -5, 'The Hostages': -6, 'IDF Service': -5,
                      'Northern Border': 1 };
        return active.map(s => map[s.name] ?? 0);
    }
    // Iran narrative leaves (bases: 30+22+20+16+12 = 100) — before → after Lion's Roar
    if (dp.length === 3 && dp[0] === 2 && dp[1] === 0 && dp[2] === 0) {
        return [-30, 8, -18, -16, 56];
    }
    // Narrative leaves under other Security sub-topics
    if (dp.length === 3 && dp[0] === 2 && dp[1] === 0 && dp[2] > 0) {
        const SECURITY_NARRATIVE_DELTAS = [
            null,                            // 0: Iran (handled above)
            [ 4, -2, -3,  2, -2,  1],       // 1: The Gaza War (6 items)
            [ 5,  2, -3, -2, -2],            // 2: October 7
            [ 2, -1, -2,  1,  0],            // 3: The Hostages
            [ 5,  6, -3, -2, -8,  2],        // 4: Home Front (6 items)
            [ 2, -2, -5, -3, -7, 15],        // 5: IDF Service (6 items)
            [ 1, -1,  1, -1,  0],            // 6: Northern Border
        ];
        return SECURITY_NARRATIVE_DELTAS[dp[2]] ?? active.map(() => 0);
    }
    // ── Non-Security CA leaf narratives (Politics/Society/CostOfLiving/Crime) ──
    if (dp.length === 3 && dp[0] === 2 && dp[1] >= 1) {
        const CA_LEAF_DELTAS = {
            // ── Politics (dp[1]=1) ──
            '1,0': [-6, -2,  8, -3, -5,  8],  // Government: rally-around-flag
            '1,1': [-2, -1, -1,  2,  2],      // Courts: judicial fades
            '1,2': [-3, -3, -2,  0,  8],      // Coalition: unity rises
            '1,3': [-8,  6, -3,  0,  5],      // Elections: "wrong time" + "victory"
            '1,4': [-1,  1, -1,  1,  0],      // Religion & State: flat
            '1,5': [ 5,  3,  5, -8, -5],      // Haredi Draft: "why not serving?"

            // ── Society (dp[1]=2) ──
            '2,0': [ 5, -2, -3,  3, -3],      // Feminism: women in military
            '2,1': [-3,  3, -2, -3,  5],      // Arab-Jewish: tensions rise
            '2,2': [-5,  5, -3,  5, -2],      // Immigration: brain drain spikes
            '2,3': [-1,  1, -1,  1,  0],      // Equality: flat
            '2,4': [-1,  0,  1, -1,  1],      // Jewish Identity: flat
            '2,5': [-5,  3, -3,  8, -3],      // Social Protest: "blocked by war"
            '2,6': [ 5, -2,  3, -3, -3],      // Education: schools close

            // ── Cost of Living (dp[1]=3) ──
            '3,0': [-2,  1, -1,  1,  1],      // Housing: drops from attention
            '3,1': [-1, -1,  1,  0,  1],      // Supermarket: drops
            '3,2': [-2,  2, -1, -1,  2],      // High-Tech: capital flight
            '3,3': [ 8,  3,  2, -5, -8],      // State Budget: WAR COSTS spike
            '3,4': [-1,  0,  1, -1,  1],      // Banking: drops
            '3,5': [ 8,  3, -3, -3, -5],      // Employment: reservists can't work
            '3,6': [ 3, -2,  5, -3, -3],      // Healthcare: mental health spike

            // ── Crime (dp[1]=4) ──
            '4,0': [ 3,  2, -2, -5,  2],      // Organized Crime: exploits vacuum
            '4,1': [ 2, -3, -2,  5, -2],      // Police: resources diverted
            '4,2': [ 2,  3, -2, -5,  2],      // Street Violence: rises
            '4,3': [-3, -2, -3,  3,  5],      // Cybercrime: IRANIAN ATTACKS
            '4,4': [-1,  0,  1, -1,  1],      // Agricultural: drops
        };
        const key = dp[1] + ',' + dp[2];
        return CA_LEAF_DELTAS[key] ?? active.map(() => 0);
    }
    // Entertainment & Music sub-categories (tiny shift: memes get a small bump)
    if (dp.length === 1 && dp[0] === 0) {
        const map = { 'Memes & Viral': 3, 'Comedy & Humor': 1,
                      'Dance Culture': -2, 'Music & Artists': -1, 'Drama & Reality': -1 };
        return active.map(s => map[s.name] ?? 0);
    }
    // Lifestyle & Food sub-categories (slight wellness bump)
    if (dp.length === 1 && dp[0] === 1) {
        const map = { 'Health & Wellness': 3, 'Food & Restaurants': -1, 'Travel & Experiences': -1 };
        return active.map(s => map[s.name] ?? 0);
    }
    // Education & Knowledge sub-categories (podcasts discuss the op slightly)
    if (dp.length === 1 && dp[0] === 3) {
        const map = { 'Podcasts & Deep Dives': 2, 'Life Skills & Finance': -1, 'History & Society': -1 };
        return active.map(s => map[s.name] ?? 0);
    }
    // Leisure & Sports sub-categories (a game or two postponed)
    if (dp.length === 1 && dp[0] === 4) {
        const map = { 'Football (Soccer)': -3, 'Fitness & Training': 1, 'E-Sports & Gaming': 2 };
        return active.map(s => map[s.name] ?? 0);
    }
    // Sub-sub-domain and leaf levels for 4 non-Current-Affairs categories: no meaningful operation impact
    if ((dp.length === 2 || dp.length === 3) && (dp[0] === 0 || dp[0] === 1 || dp[0] === 3 || dp[0] === 4)) {
        return active.map(() => 0);
    }
    return active.map(() => 0);
}

function applyLionRoarSpike(active) {
    const opStart = daysAgoToIndex(OP_DAYS_AGO);
    const deltas = getLionRoarDeltas(active);
    active.forEach((s, si) => {
        const delta = deltas[si];
        if (delta === 0) return;
        if (opStart < 0) {
            // Operation happened before range start – apply as flat offset
            for (let i = 0; i < dataStreams[si].length; i++) {
                dataStreams[si][i] = Math.max(0.3, dataStreams[si][i] + delta);
            }
        } else {
            for (let i = opStart; i < dataStreams[si].length; i++) {
                const ramp  = Math.min(1, (i - opStart) + 1);
                const noise = 1 + (Math.random() - 0.5) * 0.08;
                dataStreams[si][i] = Math.max(1, dataStreams[si][i] + delta * ramp * noise);
            }
        }
    });
}

// ── Category-specific events (non-military dynamics) ──
// daysAgo = days before today; durDays = fade duration in days (omit = permanent)
function getCategoryEvents() {
    const dp = drilldownPath;

    // ── Entertainment & Music sub-categories ──
    if (dp.length === 1 && dp[0] === 0) return [
        // New Year's Eve party content surge (Dec 29)
        { daysAgo: 65, deltas: [6, -7, -5, 4, 3], durDays: 10 },
        // Mega-viral dance challenge sweeps TikTok (Jan 17)
        { daysAgo: 46, deltas: [7, 3, -4, -3, -2] },
        // Valentine's Day content wave (Feb 12)
        { daysAgo: 20, deltas: [-2, 5, -6, 7, -3], durDays: 9 },
    ];
    // Entertainment leaves
    if (dp.length === 2 && dp[0] === 0) {
        if (dp[1] === 0) return [ // Music & Artists: Valentine releases & Israeli artists surge
            { daysAgo: 20, deltas: [5, 6, -3, -4, -4], durDays: 10 },
        ];
        if (dp[1] === 1) return [ // Comedy & Humor: New Year's comedy wave
            { daysAgo: 62, deltas: [7, -4, -2, 3, -1], durDays: 12 },
        ];
        if (dp[1] === 2) return [ // Dance Culture: viral craze sweeps TikTok
            { daysAgo: 46, deltas: [11, 4, -3, -6, -7] },
        ];
        if (dp[1] === 3) return [ // Drama & Reality: Valentine gossip wave
            { daysAgo: 20, deltas: [5, 9, -3, -4, -6], durDays: 9 },
        ];
        if (dp[1] === 4) return [ // Memes & Viral: New Year's meme fest
            { daysAgo: 65, deltas: [-5, 7, 2, -3, -4], durDays: 12 },
        ];
    }

    // ── Lifestyle & Food sub-categories ──
    if (dp.length === 1 && dp[0] === 1) return [
        // New Year's resolutions wave (Jan 1)
        { daysAgo: 62, deltas: [2, -6, -4, 9, -3], durDays: 25 },
        // Valentine's Day (Feb 12)
        { daysAgo: 20, deltas: [4, 7, -6, -5, 3], durDays: 9 },
    ];
    // Lifestyle leaves
    if (dp.length === 2 && dp[0] === 1) {
        if (dp[1] === 1) return [ // Food: Valentine dinner reviews explode
            { daysAgo: 20, deltas: [11, -5, -3, -1, -2], durDays: 9 },
        ];
        if (dp[1] === 3) return [ // Health: New Year's resolution workout wave
            { daysAgo: 62, deltas: [3, 10, 2, -7, -8], durDays: 22 },
        ];
        if (dp[1] === 0) return [ // Fashion: New Year's looks + Valentine outfits
            { daysAgo: 64, deltas: [7, 3, -4, -2, -3], durDays: 12 },
            { daysAgo: 20, deltas: [6, 4, -2, -5, -3], durDays: 9 },
        ];
    }

    // ── Education & Knowledge sub-categories ──
    if (dp.length === 1 && dp[0] === 3) return [
        // Exam season (Jan 14)
        { daysAgo: 49, deltas: [-4, 6, -2, 3, -2], durDays: 18 },
        // Major AI model release (Feb 1)
        { daysAgo: 31, deltas: [9, -6, 2, -4, -1] },
    ];
    // Education leaves
    if (dp.length === 2 && dp[0] === 3) {
        if (dp[1] === 0) return [ // Tech: AI model release shakes up the feed
            { daysAgo: 31, deltas: [12, 3, -5, -2, -8] },
        ];
        if (dp[1] === 1) return [ // Life Skills: exam season boost
            { daysAgo: 49, deltas: [6, 4, 3, -5, -8], durDays: 18 },
        ];
        if (dp[1] === 4) return [ // Podcasts: AI discussion wave
            { daysAgo: 31, deltas: [-2, 9, 3, -6, -4] },
        ];
    }

    // ── Leisure & Sports sub-categories ──
    if (dp.length === 1 && dp[0] === 4) return [
        // Major game release (Jan 26)
        { daysAgo: 37, deltas: [-3, -2, 8, -2, -1], durDays: 18 },
        // Champions League knockout stages (Feb 12)
        { daysAgo: 20, deltas: [10, -3, -2, -3, -2] },
    ];
    // Leisure leaves
    if (dp.length === 2 && dp[0] === 4) {
        if (dp[1] === 0) return [ // Football: Champions League knockouts
            { daysAgo: 20, deltas: [-4, 8, 3, 2, -9] },
        ];
        if (dp[1] === 2) return [ // E-Sports: big game release
            { daysAgo: 37, deltas: [11, -4, 5, -6, -7], durDays: 18 },
        ];
        if (dp[1] === 1) return [ // Fitness: New Year's resolution runners
            { daysAgo: 62, deltas: [4, 3, 7, -5, -9], durDays: 22 },
        ];
    }

    return [];
}

function applyCategoryEvents(active) {
    const events = getCategoryEvents();
    if (!events.length) return;
    const range = curRange;

    events.forEach(evt => {
        const startIdx = daysAgoToIndex(evt.daysAgo);
        const durPts = evt.durDays
            ? Math.max(2, Math.round(evt.durDays / range.days * TOTAL_POINTS))
            : 0;
        // Skip temp events that fully faded before range start
        if (startIdx < 0 && evt.durDays && (evt.daysAgo - evt.durDays) > 0) return;

        active.forEach((s, si) => {
            const delta = evt.deltas[si] || 0;
            if (delta === 0) return;

            if (startIdx < 0) {
                // Event before range: permanent → flat offset; faded temp → skip
                if (evt.durDays) return;
                for (let i = 0; i < dataStreams[si].length; i++) {
                    dataStreams[si][i] = Math.max(0.3, dataStreams[si][i] + delta);
                }
            } else {
                const rampPts = Math.max(1, Math.round(3 / range.days * TOTAL_POINTS));
                for (let i = startIdx; i < dataStreams[si].length; i++) {
                    const age = i - startIdx;
                    const rampUp  = Math.min(1, (age + 1) / rampPts);
                    const fadeOut = durPts ? Math.max(0, 1 - age / durPts) : 1;
                    const noise   = 1 + (Math.random() - 0.5) * 0.06;
                    dataStreams[si][i] = Math.max(0.3, dataStreams[si][i] + delta * rampUp * fadeOut * noise);
                }
            }
        });
    });
}

function generateData() {
    if (desireViewMode && activeDesire) {
        const narratives = activeDesire.narratives;
        const ops = activeDesire.opinion;
        dataStreams = narratives.map((n) => {
            const base = n.base;
            return buildStream([
                { t: 0,    v: Math.max(0.1, base) },
                { t: 0.4,  v: Math.max(0.1, base + (Math.random() - 0.5) * 2) },
                { t: 0.7,  v: Math.max(0.1, base + (Math.random() - 0.5) * 2) },
                { t: 1,    v: Math.max(0.1, base) },
            ]).map(v => Math.max(0.1, v));
        });
        const aggStream = Array.from({ length: TOTAL_POINTS }, (_, t) => {
            const frac = t / (TOTAL_POINTS - 1);
            const segFrac = frac * (ops.length - 1);
            const segIdx = Math.min(Math.floor(segFrac), ops.length - 2);
            const f = segFrac - segIdx;
            const a = ops[segIdx], b = ops[Math.min(segIdx + 1, ops.length - 1)];
            const net = (a.agrees - a.disagrees) * (1 - f) + (b.agrees - b.disagrees) * f;
            return 50 + net / 2;
        });
        dataStreams.push(aggStream);
        offset = 0;
        assignColors();
        return;
    }

    const active = getActiveSeries();
    const leaf = isLeafLevel();
    const seeds = drilldownPath.length === 0
        ? SCENARIOS[currentScenario].seeds
        : active.map(s => s.base);

    const SPREAD = [-2.5, -1.2, 0, 1.2, 2.5];

    const jitter = curRange.jitter;

    dataStreams = active.map((s, si) => {
        const base = s.base;
        const spread = SPREAD[si] ?? 0;
        const r = () => base + (Math.random() * 2 - 1) * 3 * jitter;

        if (leaf) {
            // Born narratives: flat near-zero before the operation, spike day lifts them
            const opStart = daysAgoToIndex(OP_DAYS_AGO);
            if (s.born) {
                return Array.from({length: TOTAL_POINTS}, (_, i) =>
                    (opStart >= 0 && i < opStart)
                        ? Math.max(0.3, 0.5 + (Math.random() - 0.5) * 0.4)
                        : Math.max(0.3, base || 1)
                );
            }
            const pathKey = drilldownPath.join(',');
            const leafTrends = LEAF_TRENDS[pathKey];
            const trend = (leafTrends
                ? (leafTrends[si] ?? 0)
                : (si < 2 ? 15 : -10)) * Math.min(2, jitter);
            const startV = base + spread;
            // Clamp key points to ≥0.3 so low-base items never go negative
            return buildStream([
                { t: 0,    v: Math.max(0.3, startV) },
                { t: 0.25, v: Math.max(0.3, startV + trend * 0.2)  },
                { t: 0.5,  v: Math.max(0.3, startV + trend * 0.55) },
                { t: 0.75, v: Math.max(0.3, startV + trend * 0.85) },
                { t: 1,    v: Math.max(0.3, startV + trend) },
            ]).map(v => Math.max(0.3, v));
        } else if (drilldownPath.length === 0) {
            // Top level: gradual trend from seed toward base (no clamp)
            const startV = seeds[si] + spread;
            const n = () => (Math.random() - 0.5) * 1.5 * jitter;
            return buildStream([
                { t: 0,    v: startV },
                { t: 0.25, v: startV + (base - startV) * 0.3 + n() },
                { t: 0.5,  v: startV + (base - startV) * 0.55 + n() },
                { t: 0.75, v: startV + (base - startV) * 0.8 + n() },
                { t: 1,    v: base + n() },
            ]);
        } else {
            const startV = Math.max(base - 3 * jitter, Math.min(base + 3 * jitter, seeds[si])) + spread;
            return buildStream([
                { t: 0,    v: startV },
                { t: 0.25, v: r() },
                { t: 0.5,  v: r() },
                { t: 0.75, v: r() },
                { t: 1,    v: r() },
            ]);
        }
    });

    applyCategoryEvents(active);
    applyLionRoarSpike(active);

    // Project data after TODAY: accelerating slope, preserving event spikes at TODAY_IDX
    dataStreams.forEach(ds => {
        if (ds.length > TODAY_IDX && TODAY_IDX >= 2) {
            const slope7 = ds[TODAY_IDX - 1] - ds[TODAY_IDX - 2]; // slope at point 7→8
            const trend = ds[TODAY_IDX] - ds[0];                       // overall direction
            const sign = trend >= 0 ? 1 : -1;
            const slope8 = slope7 + sign * Math.max(0.3, Math.abs(slope7) * 0.15);
            // Don't overwrite ds[TODAY_IDX] — it includes Lion's Roar spike
            const accel = slope8 - slope7;
            let prevVal = ds[TODAY_IDX]; // start projection from spike-adjusted value
            let curSlope = slope8;
            for (let i = TODAY_IDX + 1; i < ds.length; i++) {
                curSlope += accel;
                prevVal = Math.max(0.3, prevVal + curSlope);
                ds[i] = prevVal;
            }
        }
    });

    offset = 0;
    todayOriginal = dataStreams.map(ds => ds[TODAY_IDX]);
    assignColors();

    // Compute top 2 changers + deltas as pie-chart percentages (actual data only, up to TODAY)
    topTwoChangers = new Set();
    seriesDeltas = [];
    const n = Math.min(active.length, dataStreams.length);
    if (n >= 1) {
        const totalFirst = dataStreams.reduce((sum, ds) => sum + ds[0], 0);
        const totalToday = dataStreams.reduce((sum, ds) => sum + ds[Math.min(TODAY_IDX, ds.length - 1)], 0);
        const changes = [];
        for (let i = 0; i < n; i++) {
            const s = dataStreams[i];
            const pctFirst = (s[0] / totalFirst) * 100;
            const pctToday = (s[Math.min(TODAY_IDX, s.length - 1)] / totalToday) * 100;
            const delta = pctToday - pctFirst;
            seriesDeltas.push(Math.round(delta));
            changes.push({ i, c: Math.abs(delta) });
        }
        if (n >= 2) {
            changes.sort((a, b) => b.c - a.c);
            topTwoChangers.add(changes[0].i);
            topTwoChangers.add(changes[1].i);
        }
    }
}

// Blue = rising endpoint vs start, Yellow = falling
function assignColors() {
    if (desireViewMode && activeDesire) {
        dataColors = [
            ...activeDesire.narratives.map(n => n.color),
            '#ffffff'
        ];
        return;
    }
    dataColors = dataStreams.map((_, i) => SERIES_COLORS[i % SERIES_COLORS.length]);
}

function addDataPoint() {
    const active = getActiveSeries();
    const leaf = isLeafLevel();
    const last = dataStreams.map(s => s[s.length - 1]);
    const next = last.map((v, si) => {
        if (leaf) return Math.round((v + (Math.random() - 0.5) * 1.5) * 10) / 10;
        const base = active[si].base;
        const jittered = v + (Math.random() - 0.5) * 1.5;
        return Math.max(base - 3, Math.min(base + 3, Math.round(jittered * 10) / 10));
    });
    next.forEach((v, si) => dataStreams[si].push(v));
    offset++;
}

// ==================== CHART GEOMETRY ====================
const MARGIN = { top: 10, right: 30, bottom: 40, left: 45 };

function chartW() { return (canvas.width / (window.devicePixelRatio || 1)) - MARGIN.left - MARGIN.right; }
function chartH() { return (canvas.height / (window.devicePixelRatio || 1)) - MARGIN.top - MARGIN.bottom; }

function xForIndex(i)  { return MARGIN.left + (i / (VISIBLE_POINTS - 1)) * chartW(); }
let yAxisMin = 0, yAxisMax = 50;
function yForValue(v)  { return MARGIN.top + (1 - (v - yAxisMin) / (yAxisMax - yAxisMin)) * chartH(); }
function indexForX(px) {
    const ratio = (px - MARGIN.left) / chartW();
    return Math.max(0, Math.min(VISIBLE_POINTS - 1, ratio * (VISIBLE_POINTS - 1)));
}

// ==================== INTERPOLATION ====================
function getValueAtFloat(seriesIdx, floatIdx) {
    const i = offset + floatIdx;
    const lo = Math.floor(i);
    const hi = Math.ceil(i);
    const stream = dataStreams[seriesIdx];
    if (lo < 0 || hi >= stream.length) return stream[Math.min(Math.max(lo, 0), stream.length - 1)];
    if (lo === hi) return stream[lo];
    return stream[lo] * (1 - (i - lo)) + stream[hi] * (i - lo);
}

// ==================== DRAW ====================
function draw() {
    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);
    ctx.clearRect(0, 0, w, h);

    // Compute dynamic Y range from visible data
    if (desireViewMode) {
        yAxisMin = 0; yAxisMax = 100;
    } else {
        let dMin = Infinity, dMax = -Infinity;
        dataStreams.forEach(stream => {
            for (let i = offset; i < offset + VISIBLE_POINTS && i < stream.length; i++) {
                if (stream[i] < dMin) dMin = stream[i];
                if (stream[i] > dMax) dMax = stream[i];
            }
        });
        if (dMin === Infinity) { dMin = 0; dMax = 50; }
        // Add small padding and round to nice numbers
        const range = Math.max(5, dMax - dMin);
        const pad = range * 0.06;
        yAxisMin = Math.max(0, Math.floor((dMin - pad) / 5) * 5);
        yAxisMax = Math.ceil((dMax + pad) / 5) * 5;
        if (yAxisMax - yAxisMin < 10) yAxisMax = yAxisMin + 10;
    }

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    const _gridStep = desireViewMode ? 25 : Math.max(5, Math.round((yAxisMax - yAxisMin) / 5 / 5) * 5) || 5;
    for (let v = yAxisMin; v <= yAxisMax; v += _gridStep) {
        const y = yForValue(v);
        ctx.beginPath(); ctx.moveTo(MARGIN.left, y); ctx.lineTo(MARGIN.left + chartW(), y); ctx.stroke();
        ctx.fillStyle = '#4b5563';
        ctx.font = '11px system-ui';
        ctx.textAlign = 'right';
        ctx.fillText(Math.round(v) + '%', MARGIN.left - 8, y + 4);
    }

    // X labels — snap to meaningful calendar dates
    const tickXPositions = drawTimeAxis(ctx) || [];

    // Lines + gradient fill + dots
    const bottomY = MARGIN.top + chartH();

    getActiveSeries().forEach((s, si) => {
        const isAgg = desireViewMode && s.isDesireAggregate;
        // In narrativeViewMode, only draw the active narrative line
        if (narrativeViewMode && si !== activeNarrativeIdx) return;
        // Build point list
        const pts = [];
        for (let i = 0; i < VISIBLE_POINTS; i++) {
            const idx = offset + i;
            if (idx >= dataStreams[si].length) break;
            pts.push({ x: xForIndex(i), y: yForValue(dataStreams[si][idx]) });
        }
        if (pts.length === 0) return;

        const col = dataColors[si] || s.color;

        // Split points: actual data (0..TODAY_IDX) vs projection (TODAY_IDX..)
        const actualPts = !desireViewMode ? pts.slice(0, TODAY_IDX + 1) : pts;
        const projPts   = !desireViewMode ? pts.slice(TODAY_IDX) : []; // includes TODAY point for continuity

        if (!desireViewMode) {
            // Gradient fill under actual data only (up to TODAY)
            const grad = ctx.createLinearGradient(0, MARGIN.top, 0, bottomY);
            grad.addColorStop(0, col + '30');
            grad.addColorStop(1, col + '00');
            ctx.beginPath();
            ctx.moveTo(actualPts[0].x, actualPts[0].y);
            actualPts.slice(1).forEach(p => ctx.lineTo(p.x, p.y));
            ctx.lineTo(actualPts[actualPts.length - 1].x, bottomY);
            ctx.lineTo(actualPts[0].x, bottomY);
            ctx.closePath();
            ctx.fillStyle = grad;
            ctx.fill();
        }

        // Actual data line (solid)
        ctx.globalAlpha = (desireViewMode && !isAgg) ? 0.55 : 1;
        ctx.beginPath();
        ctx.strokeStyle = col;
        ctx.lineWidth = isAgg ? 5 : (desireViewMode ? 1.5 : 2);
        ctx.lineJoin = 'round';
        actualPts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.stroke();

        // Projected data line (dashed, same color)
        if (!desireViewMode && projPts.length > 1) {
            ctx.save();
            ctx.setLineDash([6, 4]);
            ctx.strokeStyle = col;
            ctx.lineWidth = 2;
            ctx.globalAlpha = 0.6;
            ctx.beginPath();
            projPts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();
        }
        ctx.globalAlpha = 1;

        if (!desireViewMode) {
            // Solid dots on actual data
            actualPts.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#0f1623';
                ctx.fill();
                ctx.beginPath();
                ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
                ctx.fillStyle = col;
                ctx.fill();
            });
            // Hollow diamond dots on projected data (skip first = TODAY overlap)
            projPts.slice(1).forEach(p => {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(Math.PI / 4);
                ctx.fillStyle = '#0f1623';
                ctx.fillRect(-4, -4, 8, 8);
                ctx.strokeStyle = col;
                ctx.lineWidth = 1.5;
                ctx.strokeRect(-4, -4, 8, 8);
                ctx.restore();
            });
        }
    });

    // TODAY vertical dashed line
    if (!desireViewMode) {
        const todayX = xForIndex(TODAY_IDX);
        ctx.save();
        ctx.setLineDash([6, 4]);
        ctx.strokeStyle = 'rgba(255,255,255,0.45)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(todayX, MARGIN.top);
        ctx.lineTo(todayX, bottomY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.font = 'bold 11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('TODAY', todayX, MARGIN.top + 14);
        ctx.restore();
    }

    // Hover interaction + scan line + pie (always visible)
    const hovering = mouseInside && mouseX >= MARGIN.left && mouseX <= MARGIN.left + chartW();
    const floatIdx = hovering
        ? indexForX(mouseX)
        : (!desireViewMode ? scanProgress * TODAY_IDX : scanProgress * (VISIBLE_POINTS - 1));
    const snapX = hovering ? xForIndex(Math.round(floatIdx)) : xForIndex(floatIdx);

    const values = [];
    getActiveSeries().forEach((s, si) => {
        const val = getValueAtFloat(si, floatIdx);
        values.push(val);
        // In narrativeViewMode, only draw hover dot for active narrative
        if (narrativeViewMode && si !== activeNarrativeIdx) return;
        const y = yForValue(val);
        const hc = dataColors[si] || s.color;
        ctx.beginPath();
        ctx.arc(snapX, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = hc;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(snapX, y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = hc;
        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.globalAlpha = 1;
    });

    if (desireViewMode && activeDesire) {
        const aggSi = activeDesire.narratives.length;
        const aggY = yForValue(getValueAtFloat(aggSi, floatIdx));
        const showDesirePie = !hovering || Math.abs(mouseY - aggY) < 20;
        if (showDesirePie) {
            const ops = activeDesire.opinion;
            const frac = floatIdx / (VISIBLE_POINTS - 1);
            const segFrac = frac * (ops.length - 1);
            const segIdx = Math.min(Math.floor(segFrac), ops.length - 2);
            const f = segFrac - segIdx;
            const a = ops[segIdx], b = ops[Math.min(segIdx + 1, ops.length - 1)];
            const opAtPoint = {
                agrees:    Math.round(a.agrees    * (1 - f) + b.agrees    * f),
                unsure:    Math.round(a.unsure    * (1 - f) + b.unsure    * f),
                disagrees: Math.round(a.disagrees * (1 - f) + b.disagrees * f),
            };
            drawDesirePie(snapX, aggY, opAtPoint);
        }
    } else {
        drawPieAtCursor(snapX, mouseY, values);
    }
}

function drawPieAtCursor(cx, cursorY, values) {
    const active = getActiveSeries();
    const total = values.reduce((a, b) => a + b, 0);
    if (total === 0) return;

    const R = getPieRadius();
    const GAP = 0.025;                // angular gap between slices (radians)
    const HIGHLIGHT_EXTRA = R * 0.08; // extra radius for top-2 changers

    // In narrativeViewMode: show 2 slices — active (colored) + rest (gray)
    if (narrativeViewMode && activeNarrativeIdx !== null) {
        const activeVal = values[activeNarrativeIdx] || 0;
        const grayVal = total - activeVal;
        const activeColor = dataColors[activeNarrativeIdx] || active[activeNarrativeIdx].color;
        const dpr = window.devicePixelRatio || 1;
        const pw = pieCanvas.width / dpr;
        const ph = pieCanvas.height / dpr;
        const pieX = pw / 2;
        const pieY = ph / 2;
        const EX = R * 0.1;
        pieCtx.save();
        pieCtx.scale(dpr, dpr);
        pieCtx.clearRect(0, 0, pw, ph);
        // Shadow bg
        pieCtx.save();
        pieCtx.shadowColor = 'rgba(0,0,0,0.5)';
        pieCtx.shadowBlur = 20;
        pieCtx.beginPath();
        pieCtx.arc(pieX, pieY, R + HIGHLIGHT_EXTRA + 2, 0, Math.PI * 2);
        pieCtx.fillStyle = '#0f1623';
        pieCtx.fill();
        pieCtx.restore();
        const twoSlices = [
            { val: activeVal, color: activeColor, hi: true  },
            { val: grayVal,   color: '#4b5563',   hi: false },
        ];
        lastPieSlices = [];
        let sa = -Math.PI / 2;
        twoSlices.forEach(({ val, color, hi }, i) => {
            const ang = (val / total) * Math.PI * 2;
            const mid = sa + ang / 2;
            const sliceR = hi ? R + HIGHLIGHT_EXTRA : R;
            const ex = hi ? Math.cos(mid) * EX : 0;
            const ey = hi ? Math.sin(mid) * EX : 0;
            pieCtx.globalAlpha = hi ? 1 : 0.32;
            pieCtx.beginPath();
            pieCtx.moveTo(pieX + ex, pieY + ey);
            pieCtx.arc(pieX + ex, pieY + ey, sliceR, sa + GAP / 2, sa + ang - GAP / 2);
            pieCtx.closePath();
            pieCtx.fillStyle = color;
            pieCtx.fill();
            lastPieSlices.push({ startAngle: sa, endAngle: sa + ang, name: hi ? active[activeNarrativeIdx].name : 'Others', idx: hi ? activeNarrativeIdx : -1, ex, ey });
            sa += ang;
        });
        pieCtx.globalAlpha = 1;
        // Glow ring
        pieCtx.save();
        sa = -Math.PI / 2;
        twoSlices.forEach(({ val, color, hi }) => {
            const ang = (val / total) * Math.PI * 2;
            const mid = sa + ang / 2;
            const sliceR = hi ? R + HIGHLIGHT_EXTRA : R;
            const ex = hi ? Math.cos(mid) * EX : 0;
            const ey = hi ? Math.sin(mid) * EX : 0;
            pieCtx.shadowColor = color;
            pieCtx.shadowBlur = hi ? 14 : 4;
            pieCtx.strokeStyle = color;
            pieCtx.lineWidth = hi ? 2 : 1;
            pieCtx.beginPath();
            pieCtx.arc(pieX + ex, pieY + ey, sliceR, sa + GAP / 2, sa + ang - GAP / 2);
            pieCtx.stroke();
            sa += ang;
        });
        pieCtx.restore();
        // Labels
        sa = -Math.PI / 2;
        twoSlices.forEach(({ val, hi }) => {
            const ang = (val / total) * Math.PI * 2;
            const mid = sa + ang / 2;
            const sliceR = hi ? R + HIGHLIGHT_EXTRA : R;
            const ex = hi ? Math.cos(mid) * EX : 0;
            const ey = hi ? Math.sin(mid) * EX : 0;
            if (ang > 0.3) {
                const lx = pieX + ex + Math.cos(mid) * sliceR * 0.58;
                const ly = pieY + ey + Math.sin(mid) * sliceR * 0.58;
                pieCtx.fillStyle = '#fff';
                const fs = Math.max(11, Math.round(R * 0.16));
                pieCtx.font = 'bold ' + fs + 'px system-ui';
                pieCtx.textAlign = 'center';
                pieCtx.textBaseline = 'middle';
                pieCtx.fillText(Math.round((val / total) * 100) + '%', lx, ly);
            }
            sa += ang;
        });
        pieCtx.restore();
        updateLegendValues(values, total);
        return;
    }

    const topTwo = topTwoChangers;

    // Draw on the separate pie canvas (centered)
    const dpr = window.devicePixelRatio || 1;
    const pw = pieCanvas.width / dpr;
    const ph = pieCanvas.height / dpr;
    const pieX = pw / 2;
    const pieY = ph / 2;

    pieCtx.save();
    pieCtx.scale(dpr, dpr);
    pieCtx.clearRect(0, 0, pw, ph);

    // Shadow bg
    pieCtx.save();
    pieCtx.shadowColor = 'rgba(0,0,0,0.5)';
    pieCtx.shadowBlur = 20;
    pieCtx.beginPath();
    pieCtx.arc(pieX, pieY, R + HIGHLIGHT_EXTRA + 2, 0, Math.PI * 2);
    pieCtx.fillStyle = '#0f1623';
    pieCtx.fill();
    pieCtx.restore();

    // Slices — gaps between, top-2 get larger radius, 3D finish
    lastPieSlices = [];
    let startAngle = -Math.PI / 2;
    values.forEach((val, i) => {
        const sliceAngle = (val / total) * Math.PI * 2;
        const highlighted = topTwo.has(i);
        const sliceR = highlighted ? R + HIGHLIGHT_EXTRA : R;
        const a0 = startAngle + GAP / 2;
        const a1 = startAngle + sliceAngle - GAP / 2;
        const midAngle = startAngle + sliceAngle / 2;
        const col = dataColors[i] || active[i].color;

        // Base fill (dimmed)
        pieCtx.globalAlpha = 0.4;
        pieCtx.beginPath();
        pieCtx.moveTo(pieX, pieY);
        pieCtx.arc(pieX, pieY, sliceR, a0, a1);
        pieCtx.closePath();
        pieCtx.fillStyle = col;
        pieCtx.fill();

        // 3D highlight — radial gradient for depth
        pieCtx.globalAlpha = 0.18;
        const grad = pieCtx.createRadialGradient(
            pieX + Math.cos(midAngle) * sliceR * 0.3,
            pieY + Math.sin(midAngle) * sliceR * 0.3 - sliceR * 0.15,
            0, pieX, pieY, sliceR
        );
        grad.addColorStop(0, 'rgba(255,255,255,0.7)');
        grad.addColorStop(0.5, 'rgba(255,255,255,0.05)');
        grad.addColorStop(1, 'rgba(0,0,0,0.15)');
        pieCtx.beginPath();
        pieCtx.moveTo(pieX, pieY);
        pieCtx.arc(pieX, pieY, sliceR, a0, a1);
        pieCtx.closePath();
        pieCtx.fillStyle = grad;
        pieCtx.fill();
        pieCtx.globalAlpha = 1;

        lastPieSlices.push({ startAngle, endAngle: startAngle + sliceAngle, name: active[i].name, idx: i, r: sliceR });
        startAngle += sliceAngle;
    });
    pieCtx.globalAlpha = 1;

    // Percentage labels inside slices
    startAngle = -Math.PI / 2;
    values.forEach((val, i) => {
        const sliceAngle = (val / total) * Math.PI * 2;
        const midAngle = startAngle + sliceAngle / 2;
        const highlighted = topTwo.has(i);
        const sliceR = highlighted ? R + HIGHLIGHT_EXTRA : R;
        if (sliceAngle > 0.3) {
            const lx = pieX + Math.cos(midAngle) * sliceR * 0.58;
            const ly = pieY + Math.sin(midAngle) * sliceR * 0.58;
            pieCtx.fillStyle = '#fff';
            const fontSize = Math.max(11, Math.round(R * 0.16));
            pieCtx.font = 'bold ' + fontSize + 'px system-ui';
            pieCtx.textAlign = 'center';
            pieCtx.textBaseline = 'middle';
            pieCtx.fillText(Math.round((val / total) * 100) + '%', lx, ly);
        }
        startAngle += sliceAngle;
    });

    pieCtx.restore();

    // Update legend with hover percentages
    updateLegendValues(values, total);

    // Vertical line on main chart canvas (only when hovering)
    if (cx >= 0) {
        ctx.save();
        ctx.strokeStyle = 'rgba(255,255,255,0.18)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, MARGIN.top + chartH());
        ctx.lineTo(cx, MARGIN.top);
        ctx.stroke();
        ctx.restore();
    }
}

function drawDesirePie(cx, cy, opinionAtPoint) {
    const { agrees, unsure, disagrees } = opinionAtPoint;
    const total = agrees + unsure + disagrees;
    if (total === 0) return;
    const r = getPieRadius(), ri = r * 0.625;


    const dpr = window.devicePixelRatio || 1;
    const pw = pieCanvas.width / dpr;
    const ph = pieCanvas.height / dpr;
    const pieX = pw / 2;
    const pieY = ph / 2;

    pieCtx.save();
    pieCtx.scale(dpr, dpr);
    pieCtx.clearRect(0, 0, pw, ph);

    pieCtx.save();
    pieCtx.shadowColor = 'rgba(0,0,0,0.6)';
    pieCtx.shadowBlur = 20;
    pieCtx.beginPath();
    pieCtx.arc(pieX, pieY, r + 4, 0, Math.PI * 2);
    pieCtx.fillStyle = '#0f1623';
    pieCtx.fill();
    pieCtx.restore();

    const slices = [
        { val: agrees,    color: '#3b82f6' },
        { val: unsure,    color: '#6b7280' },
        { val: disagrees, color: '#ef4444' },
    ];
    let angle = -Math.PI / 2;
    slices.forEach(({ val, color }) => {
        const a = (val / total) * Math.PI * 2;
        pieCtx.beginPath();
        pieCtx.moveTo(pieX, pieY);
        pieCtx.arc(pieX, pieY, r, angle, angle + a);
        pieCtx.closePath();
        pieCtx.fillStyle = color;
        pieCtx.fill();
        angle += a;
    });

    pieCtx.beginPath();
    pieCtx.arc(pieX, pieY, ri, 0, Math.PI * 2);
    pieCtx.fillStyle = '#0f1623';
    pieCtx.fill();

    const net = agrees - disagrees;
    pieCtx.fillStyle = '#f9fafb';
    const dfs = Math.max(9, Math.round(r * 0.16));
    pieCtx.font = 'bold ' + dfs + 'px system-ui';
    pieCtx.textAlign = 'center';
    pieCtx.textBaseline = 'middle';
    pieCtx.fillText((net > 0 ? '+' : '') + net + '%', pieX, pieY);

    pieCtx.restore();

    // Vertical line on main chart canvas (only when hovering)
    if (cx >= 0) {
        ctx.save();
        ctx.strokeStyle = 'rgba(255,255,255,0.18)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, MARGIN.top + chartH());
        ctx.lineTo(cx, MARGIN.top);
        ctx.stroke();
        ctx.restore();
    }
}

function drawTimeAxis(ctx) {
    const range = curRange;
    const now = new Date();
    const startDate = new Date(now);
    startDate.setDate(now.getDate() - range.days);
    const nowYear = now.getFullYear();

    ctx.fillStyle = '#4b5563';
    ctx.textAlign = 'center';
    ctx.font = '13px system-ui';
    const labelY = MARGIN.top + chartH() + 25;

    // Convert a Date to x position (left edge → TODAY line)
    const todayX = xForIndex(TODAY_IDX);
    const timelineW = todayX - MARGIN.left;
    function dateToX(d) {
        const daysAgo = (now - d) / 86400000;
        const frac = 1 - daysAgo / range.days;
        return MARGIN.left + frac * timelineW;
    }

    // Format: relative English labels
    function fmt(d) {
        const daysAgo = Math.round((now - d) / 86400000);
        if (daysAgo <= 0) return 'Today';
        if (daysAgo === 1) return 'Yesterday';
        if (daysAgo <= 6) return daysAgo + ' days ago';
        if (daysAgo <= 13) return '1 week ago';
        if (daysAgo <= 20) return '2 weeks ago';
        if (daysAgo <= 29) return '3 weeks ago';
        const months = Math.round(daysAgo / 30);
        if (months <= 1) return '1 month ago';
        if (months <= 11) return months + ' months ago';
        const years = Math.round(daysAgo / 365);
        if (years <= 1) return '1 year ago';
        return years + ' years ago';
    }

    if (range.days <= 1) {
        // 24H: show hours HH:00
        const hoursStep = 3;
        const tickXs = [];
        for (let h = 0; h <= 24; h += hoursStep) {
            const d = new Date(now.getTime() - h * 3600000);
            const x = dateToX(d);
            if (x >= MARGIN.left && x <= todayX) {
                ctx.fillText(d.getHours().toString().padStart(2, '0') + ':00', x, labelY);
                tickXs.push(x);
            }
        }
        return tickXs;
    }

    // Place labels at chart indices 1, 3, 5, 7
    const tickXs = [];
    [1, 3, 5, 7].forEach(idx => {
        const x = xForIndex(idx);
        const daysAgo = range.days * (TODAY_IDX - idx) / TODAY_IDX;
        const d = new Date(now.getTime() - daysAgo * 86400000);
        ctx.fillText(fmt(d), x, labelY);
        tickXs.push(x);
    });
    return tickXs;
}

// ==================== EVENTS ====================
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    mouseInside = true;
    scanActive = false;
});

canvas.addEventListener('mouseleave', () => {
    mouseInside = false;
    scanActive = true;
    scanStartTime = 0;
});

// ==================== PIE TOOLTIP + CLICK ====================
const pieTooltip = document.getElementById('pieTooltip');
function hitTestPie(e) {
    const rect = pieCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const pw = pieCanvas.width / dpr;
    const ph = pieCanvas.height / dpr;
    const pieX = pw / 2, pieY = ph / 2;
    const mx = (e.clientX - rect.left) * (pw / rect.width);
    const my = (e.clientY - rect.top) * (ph / rect.height);
    const dx = mx - pieX, dy = my - pieY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (lastPieSlices.length === 0) return null;
    let angle = Math.atan2(dy, dx);
    if (angle < -Math.PI / 2) angle += Math.PI * 2;
    for (const s of lastPieSlices) {
        if (angle >= s.startAngle && angle < s.endAngle && dist <= s.r) return s;
    }
    return null;
}
pieCanvas.addEventListener('mousemove', (e) => {
    const hit = hitTestPie(e);
    if (hit) {
        pieTooltip.textContent = hit.name;
        pieTooltip.style.display = 'block';
        pieTooltip.style.left = (e.clientX + 12) + 'px';
        pieTooltip.style.top = (e.clientY - 8) + 'px';
        pieCanvas.style.cursor = 'pointer';
    } else {
        pieTooltip.style.display = 'none';
        pieCanvas.style.cursor = 'default';
    }
});
pieCanvas.addEventListener('mouseleave', () => {
    pieTooltip.style.display = 'none';
    pieCanvas.style.cursor = 'default';
});
pieCanvas.addEventListener('click', (e) => {
    const hit = hitTestPie(e);
    if (hit != null && hit.idx >= 0) {
        pieTooltip.style.display = 'none';
        const s = getActiveSeries()[hit.idx];
        if (s && s.children) drillDown(hit.idx);
        else if (s && s.insights) enterNarrativeView(hit.idx);
    }
});

// ==================== DESIRE VIEW ====================
function enterDesireView(desire) {
    desireViewMode = true;
    activeDesire = desire;
    desireViewOwnerPath = drilldownPath.slice();
    generateData(); buildLegend(); draw();
}

function exitDesireView() {
    desireViewMode = false;
    activeDesire = null;
    drilldownPath = desireViewOwnerPath.slice();
    generateData(); buildLegend(); draw();
}

// ==================== NARRATIVE VIEW ====================
function enterNarrativeView(idx) {
    narrativeViewMode = true;
    activeNarrativeIdx = idx;
    narrativeViewOwnerPath = drilldownPath.slice();
    generateData(); buildLegend(); draw();
}

function exitNarrativeView() {
    narrativeViewMode = false;
    activeNarrativeIdx = null;
    drilldownPath = narrativeViewOwnerPath.slice();
    generateData(); buildLegend(); draw();
}

// ==================== LEGEND ====================
function updateLegendValues(values, total) {
    const items = document.querySelectorAll('#legend .legend-item');
    items.forEach((item, i) => {
        const small = item.querySelector('small.legend-pct');
        if (small && i < values.length) {
            small.textContent = Math.round((values[i] / total) * 100) + '%';
            small.style.color = '#d1d5db';
        }
    });
}

function resetLegendValues() {
    const active = getActiveSeries();
    const leaf = isLeafLevel();
    if (leaf) return;
    const seeds = active.map(s => s.base);
    const items = document.querySelectorAll('#legend .legend-item');
    items.forEach((item, i) => {
        const small = item.querySelector('small.legend-pct');
        if (small && i < seeds.length) {
            small.textContent = seeds[i] + '%';
            small.style.color = '#6b7280';
        }
    });
}

function buildLegend() {
    const el = document.getElementById('legend');

    // Narrative view mode
    if (narrativeViewMode && activeNarrativeIdx !== null) {
        const active = getActiveSeries();
        const s = active[activeNarrativeIdx];
        let html = '<div class="breadcrumb-nav">';
        html += `<button class="bc-step" onclick="exitNarrativeView()">‹ Back</button>`;
        // Rebuild path breadcrumb
        let nav = SERIES;
        const pathParts = [];
        for (const idx of drilldownPath) {
            pathParts.push(nav[idx].name);
            nav = nav[idx].children;
        }
        pathParts.forEach((name, depth) => {
            html += '<span class="bc-sep">›</span>';
            html += `<button class="bc-step" onclick="exitNarrativeView(); drillTo(${depth + 1})">${name}</button>`;
        });
        html += `<span class="bc-sep">›</span><span class="bc-current">${s.name}</span>`;
        html += '</div>';
        el.innerHTML = html;
        buildInsightPanel();
        document.getElementById('pageTitle').textContent = s.name;
        return;
    }

    // Desire view mode
    if (desireViewMode && activeDesire) {
        let html = '<div class="breadcrumb-nav">';
        html += `<button class="bc-step" onclick="exitDesireView()">‹ Back</button>`;
        html += '</div>';
        html += `<div class="desire-view-title">${activeDesire.label}</div>`;
        html += activeDesire.narratives.map((n) => `
            <div class="legend-item">
                <div class="legend-color" style="background:${n.color}"></div>
                <span>${n.name}</span>
            </div>`).join('');
        el.innerHTML = html;
        document.getElementById('insight-panel').style.display = 'none';
        return;
    }

    const active = getActiveSeries();
    const leaf = isLeafLevel();
    const seeds = active.map(s => s.base);

    let html = '';

    // Clickable breadcrumb showing full path
    if (drilldownPath.length > 0) {
        let nav = SERIES;
        const pathParts = [];
        for (const idx of drilldownPath) {
            pathParts.push(nav[idx].name);
            nav = nav[idx].children;
        }
        html += '<div class="breadcrumb-nav">';
        html += `<button class="bc-step" onclick="drillTo(0)">TikTok Trend Monitor</button>`;
        pathParts.forEach((name, depth) => {
            html += '<span class="bc-sep">›</span>';
            if (depth < pathParts.length - 1) {
                html += `<button class="bc-step" onclick="drillTo(${depth + 1})">${name}</button>`;
            } else {
                html += `<span class="bc-current">${name}</span>`;
            }
        });
        html += '</div>';
    }

    html += active.map((s, i) => {
        const clickable = !!s.children;
        const leafClickable = !s.children && !!s.insights;
        const pct = leaf ? '' : `<small class="legend-pct" style="color:#6b7280;font-size:0.7rem">${seeds[i]}%</small>`;
        const d = seriesDeltas[i] || 0;
        const deltaColor = d > 0 ? '#22c55e' : d < 0 ? '#ef4444' : '#6b7280';
        const deltaArrow = d > 0 ? '↑' : d < 0 ? '↓' : '';
        const deltaSign = d > 0 ? '+' : '';
        const deltaHtml = `<small class="legend-delta" style="color:${deltaColor}">${deltaArrow}${deltaSign}${d}%</small>`;
        const onclickAttr = clickable ? ` onclick="drillDown(${i})"` : leafClickable ? ` onclick="enterNarrativeView(${i})"` : '';
        const spIdx = s.name.indexOf(' ');
        const firstPart = spIdx > 0 ? s.name.slice(0, spIdx) : '';
        const hasEmoji = firstPart && /[^\x20-\x7E]/.test(firstPart);
        const emoji = hasEmoji ? firstPart : '';
        const textName = hasEmoji ? s.name.slice(spIdx + 1) : s.name;
        const topClass = drilldownPath.length === 0 ? ' top-level' : '';
        return `<div class="legend-item${(clickable || leafClickable) ? ' clickable' : ''}${topClass}"${onclickAttr}>
            <div class="legend-color" style="background:${dataColors[i] || s.color}">${emoji}</div>
            <span>${textName} ${pct} ${deltaHtml}</span>
            ${s.desc ? `<div class="tooltip">${s.desc}</div>` : ''}
        </div>`;
    }).join('');

    el.innerHTML = html;

    // Update page title only
    if (drilldownPath.length > 0) {
        let nav = SERIES;
        const parts = [];
        for (const idx of drilldownPath) {
            parts.push(nav[idx].name);
            nav = nav[idx].children;
        }
        document.getElementById('pageTitle').textContent = parts[parts.length - 1];
    } else {
        const scenario = SCENARIOS[currentScenario].label;
        document.getElementById('pageTitle').textContent =
            scenario === 'All' ? 'TikTok Trend Monitor' : scenario + ' — Content Distribution';
    }
    buildInsightPanel();
}

// ==================== INSIGHT PANEL ====================
let _insightTab = 'desire';

function renderInsightList(items) {
    const isDesireTab = _insightTab === 'desire' && items.length > 0 && typeof items[0] === 'object';
    const isRealityTab = _insightTab === 'reality';
    const toHtml = (x, i) => isDesireTab
        ? `<li class="desire-clickable" data-idx="${i}">${x.label} <span style="color:#4b5563">›</span></li>`
        : `<li>${x}</li>`;

    const visible = items.slice(0, 3);
    const hidden  = items.slice(3);
    const ol = document.getElementById('insight-list');

    const existingPrefix = document.getElementById('reality-prefix');
    if (existingPrefix) existingPrefix.remove();
    if (isRealityTab) {
        const prefix = document.createElement('div');
        prefix.id = 'reality-prefix';
        prefix.style.cssText = 'font-size:0.8rem;color:#6b7280;margin-bottom:4px';
        prefix.textContent = 'I believe the reality today is that...';
        ol.before(prefix);
    }

    ol.innerHTML = visible.map((x, i) => toHtml(x, i)).join('');

    if (isDesireTab) {
        ol.querySelectorAll('.desire-clickable').forEach(li => {
            li.addEventListener('click', () => enterDesireView(items[+li.dataset.idx]));
        });
    }

    const existing = document.getElementById('insight-more-btn');
    if (existing) existing.remove();
    const existingExtra = document.getElementById('insight-extra');
    if (existingExtra) existingExtra.remove();

    if (hidden.length) {
        const extra = document.createElement('ol');
        extra.id = 'insight-extra';
        extra.style.cssText = 'display:none;margin:0;padding-left:14px;flex-direction:column;gap:7px';
        extra.setAttribute('start', String(visible.length + 1));
        extra.innerHTML = hidden.map((x, j) => toHtml(x, visible.length + j)).join('');
        ol.after(extra);

        if (isDesireTab) {
            extra.querySelectorAll('.desire-clickable').forEach(li => {
                li.addEventListener('click', () => enterDesireView(items[+li.dataset.idx]));
            });
        }

        const btn = document.createElement('button');
        btn.id = 'insight-more-btn';
        btn.textContent = 'see more ▾';
        btn.style.cssText = 'background:none;border:none;color:#4b5563;font-size:0.62rem;cursor:pointer;padding:6px 0 0;font-family:inherit;text-align:left';
        btn.addEventListener('click', () => {
            const expanded = extra.style.display === 'flex';
            extra.style.display = expanded ? 'none' : 'flex';
            btn.textContent = expanded ? 'see more ▾' : 'see less ▴';
        });
        extra.after(btn);
    }
}

function buildInsightPanel() {
    const panel = document.getElementById('insight-panel');

    // Panel only shows in narrativeViewMode (per-narrative D/E/R)
    if (!narrativeViewMode) { panel.style.display = 'none'; return; }

    const narrative = getActiveSeries()[activeNarrativeIdx];
    if (!narrative || !narrative.insights) { panel.style.display = 'none'; return; }

    const data = narrative.insights;
    panel.style.display = 'flex';

    panel.innerHTML = `
        <div class="insight-title">Most Influenced</div>
        <div class="insight-tabs">
            <button class="insight-tab${_insightTab==='desire'  ? ' active' : ''}" data-tab="desire">Desire</button>
            <button class="insight-tab${_insightTab==='emotion' ? ' active' : ''}" data-tab="emotion">Emotion</button>
            <button class="insight-tab${_insightTab==='reality' ? ' active' : ''}" data-tab="reality">Reality Perception</button>
        </div>
        <ol id="insight-list"></ol>
    `;
    renderInsightList(data[_insightTab]);

    panel.querySelectorAll('.insight-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            _insightTab = btn.dataset.tab;
            panel.querySelectorAll('.insight-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderInsightList(data[_insightTab]);
        });
    });
}


// ==================== TIME RANGE SLIDER ====================
let _sliderTimeout = null;
function updateSliderTrack() {
    const slider = document.getElementById('timeSlider');
    const pct = slider.value / 10; // 0–100%
    slider.style.background = 'linear-gradient(to right, #3b82f6 ' + pct + '%, #1e293b ' + pct + '%)';
}
function onSliderInput() {
    const slider = document.getElementById('timeSlider');
    const days = sliderToDays(+slider.value);
    // Instant UI feedback
    document.getElementById('rangeLabel').textContent = rangeLabel(days);
    updateSliderTrack();
    // Debounce the heavy recalc
    clearTimeout(_sliderTimeout);
    _sliderTimeout = setTimeout(() => {
        curRange = computeRangeParams(days);
        TOTAL_POINTS = curRange.points;
        VISIBLE_POINTS = TOTAL_POINTS;
        resize();
        generateData();
        buildLegend();
        draw();
    }, 70);
}

// ==================== TABS ====================
function setScenario(btn, idx) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    currentScenario = idx;
    generateData();
    buildLegend();
    draw();
}

// ==================== DRILLDOWN ====================
function drillDown(idx) {
    if (desireViewMode) { desireViewMode = false; activeDesire = null; }
    if (narrativeViewMode) { narrativeViewMode = false; activeNarrativeIdx = null; }
    drilldownPath.push(idx);
    generateData();
    buildLegend();
    draw();
}

function drillTo(depth) {
    if (desireViewMode) { desireViewMode = false; activeDesire = null; }
    if (narrativeViewMode) { narrativeViewMode = false; activeNarrativeIdx = null; }
    drilldownPath = drilldownPath.slice(0, depth);
    generateData();
    buildLegend();
    draw();
}

// ==================== LIVE UPDATES ====================
function tick() {
    if (desireViewMode) return;
    const active = getActiveSeries();
    const leaf = isLeafLevel();
    const deltas = getLionRoarDeltas(active);
    dataStreams.forEach((stream, si) => {
        const orig = todayOriginal[si];
        if (orig == null) return;
        const nScale = Math.min(1, curRange.jitter);
        const noise = (Math.random() - 0.5) * (leaf ? 2 : 0.8) * nScale * 0.5;
        stream[TODAY_IDX] = Math.max(0.3, orig + noise);
    });
}

// ==================== ANIMATION LOOP ====================
function animate(now) {
    if (scanActive) {
        if (!scanStartTime) scanStartTime = now;
        const t = (now - scanStartTime) % SCAN_CYCLE;
        if (t < SCAN_SWEEP) {
            scanProgress = t / SCAN_SWEEP;                          // 0→1
        } else if (t < SCAN_SWEEP + SCAN_PAUSE) {
            scanProgress = 1;                                        // pause at end
        } else if (t < SCAN_SWEEP + SCAN_PAUSE + SCAN_SWEEP) {
            scanProgress = 1 - (t - SCAN_SWEEP - SCAN_PAUSE) / SCAN_SWEEP; // 1→0
        } else {
            scanProgress = 0;                                        // pause at start
        }
    }
    draw();
    animFrame = requestAnimationFrame(animate);
}

// ==================== INIT ====================
function initPieCanvas() {
    const container = document.querySelector('.pie-container');
    if (!container) return;
    const size = Math.min(container.clientWidth - 40, container.clientHeight - 40, 400);
    if (size <= 0) return;
    const dpr = window.devicePixelRatio || 1;
    pieCanvas.width = size * dpr;
    pieCanvas.height = size * dpr;
    pieCanvas.style.width = size + 'px';
    pieCanvas.style.height = size + 'px';
}

document.getElementById('timeSlider').addEventListener('input', onSliderInput);
updateSliderTrack();

resize();
generateData();
buildLegend();
animFrame = requestAnimationFrame(animate);

setInterval(tick, 2000);

// ==================== RESIZE HANDLE ====================
(function() {
    const handle  = document.getElementById('resizeHandle');
    const leftCol = document.getElementById('leftCol');
    let dragging = false, startX, startW;

    handle.addEventListener('mousedown', e => {
        dragging = true;
        startX = e.clientX;
        startW = leftCol.offsetWidth;
        handle.classList.add('dragging');
        document.body.style.cursor     = 'col-resize';
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', e => {
        if (!dragging) return;
        const w = Math.max(100, Math.min(480, startW + e.clientX - startX));
        leftCol.style.width = w + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (!dragging) return;
        dragging = false;
        handle.classList.remove('dragging');
        document.body.style.cursor     = '';
        document.body.style.userSelect = '';
        resize(); draw();
    });
})();
