importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"35d1b8da1c3512eca777d2ee45667338","url":"contributors.html"},{"revision":"c9c6d0e08caff6345891bd91a061edd0","url":"feedback.html"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/aim.001.png"},{"revision":"7494d69b4a9e02c3d0cd440a6b8a0399","url":"images/aim.002.png"},{"revision":"276aeea87b39f10a8029fdc097b2731e","url":"images/fig1.jpg"},{"revision":"3a44892279fa9696a31205db55b60c9d","url":"images/fig2.jpg"},{"revision":"41c03da015acb5c71bef844a01653dbb","url":"images/fig3.jpg"},{"revision":"a7101dc87bd0609a806e29829d4fe6be","url":"images/fig4.jpg"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/procedure.001.png"},{"revision":"2b7001fed13d7bf8c7581e7ac0e3a1f0","url":"images/procedure.002.png"},{"revision":"d1774611cc2cdf6a7fe491919fed110f","url":"images/procedure.003.png"},{"revision":"6c21411feacdd9d2abd9912cfc2c8053","url":"images/procedure.004.png"},{"revision":"fac796d98db7a4ab9902f23385404149","url":"images/procedure.005.png"},{"revision":"5decd6395b574ffc350249bdd0aaa950","url":"images/procedure.006.png"},{"revision":"b6ea3adfcc774d8fb94fa712e0f01aaa","url":"images/procedure.007.png"},{"revision":"00a4b402cf91434223347f072f95c180","url":"images/procedure.008.png"},{"revision":"fcbdb22de160b39ff1db614c5216c40b","url":"images/procedure.009.png"},{"revision":"d2bbb496f6fe1e671b8084bc99e78cd9","url":"images/procedure.010.png"},{"revision":"94f863857a9cf20beea6aea49bc3c584","url":"images/procedure.011.png"},{"revision":"eebc77d09b638ba07c39a49393550899","url":"images/procedure.012.png"},{"revision":"c45e0ff4449ede33f60191b85c24bc21","url":"images/procedure.013.png"},{"revision":"8a72eaf0e87fbc86be80d7c6ed7e3c3b","url":"images/procedure.014.png"},{"revision":"c54ad436d27db80aee4d6f258d7d3cfd","url":"images/procedure.015.png"},{"revision":"7d169d7d805f74294465c1513b40d27f","url":"images/procedure.016.png"},{"revision":"7b5d4ac24f78013065fce6f4881713c1","url":"images/procedure.017.png"},{"revision":"284f268833643e84c48634be458ea808","url":"images/procedure.018.png"},{"revision":"f5468d766335767d0cb41591b2a4aabc","url":"images/procedure.019.png"},{"revision":"91594da015f3a46019d5e4a60add7bab","url":"images/procedure.020.png"},{"revision":"332ad3142575a275b8a13a47a46a7cbb","url":"images/procedure.021.png"},{"revision":"bee6f16196ca2da6c619932b05cda551","url":"images/procedure.022.png"},{"revision":"b4db0e7bd58cf0bc36c7ed6c44d75f1b","url":"images/procedure.023.png"},{"revision":"10d6690d82166f3488bae7b600b1b080","url":"images/procedure.024.png"},{"revision":"93a497c188036eeb1c7d47559d57af37","url":"images/procedure.025.png"},{"revision":"87750fa604bf3036095386b20ee6d36e","url":"images/procedure.026.png"},{"revision":"9a171d5c9542aa227687b42269fd49df","url":"images/procedure.027.png"},{"revision":"b6a4890fcdc408468f4f546add77d62c","url":"images/procedure.028.png"},{"revision":"06368257f08d3cd3a9c01cd3bc6d6111","url":"images/procedure.029.png"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/references.001.png"},{"revision":"ba683ab9a3d53fd006f8591c5d5ffbb9","url":"images/step1.png"},{"revision":"958f58832ab5abce21a8365e39268c06","url":"images/step10.png"},{"revision":"be7170e5b7af3cbc325d5e111bcf7274","url":"images/step2.png"},{"revision":"9e77875440405d98e2d1379bf88fd557","url":"images/step3.png"},{"revision":"8f5c2b57026dc57d963ff2008a45966f","url":"images/step4.png"},{"revision":"c65aaee7b09c47acf4f68dd6412eaf24","url":"images/step5.png"},{"revision":"a1b23d014cfcbc82c319a7f14c473713","url":"images/step6.png"},{"revision":"8f03e3b988832160048d07239a5f8ccb","url":"images/step7.png"},{"revision":"c7a4c461ea47bb6d7bfb88d6c3043a57","url":"images/step8.png"},{"revision":"a6e6168bd2f4141da03b4f2c983f28fb","url":"images/step9.png"},{"revision":"a4b25f7d5a9c5ce14460390c1b5a592b","url":"images/theory.001.png"},{"revision":"050be6799b178541d31d1fba99917a4f","url":"images/theory.002.png"},{"revision":"600e0f324678137278c50a22715ffaca","url":"images/theory.003.png"},{"revision":"d7f4e543931227e90ede4ef6133e55db","url":"images/theory.004.png"},{"revision":"7ec7b6fab01bc9d4764fce68aef1649c","url":"images/theory.005.png"},{"revision":"ce6c723a9f716f9efcc959659a293b60","url":"images/theory.006.png"},{"revision":"6c0eef7a50fc622aca3a59253fec3172","url":"images/theory.007.png"},{"revision":"aa7ba06eb915b337f857dbc24359e042","url":"images/theory.008.png"},{"revision":"2bd75e7640a0e41974a530e1af57411d","url":"images/theory.009.png"},{"revision":"2169bae43d2d4cf98a61c39ad90469aa","url":"images/theory.010.png"},{"revision":"aba3e9e340cbebdcf34b9a5f926bfcb7","url":"index.html"},{"revision":"ff4cf7b386758042b2dd5ba5950fff67","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"7c45ad9b733606a0a8e9cbb583809921","url":"posttest.html"},{"revision":"d97ba62ed36b4314f99a70b396685c57","url":"posttest.json"},{"revision":"6e18820d367f79fa622c239b7f53222a","url":"pretest.html"},{"revision":"3eb3bdd56849374770016b97a9160751","url":"pretest.json"},{"revision":"1e138fb349bf7579eea94db4340d46f6","url":"procedure.html"},{"revision":"6926b1f7569604781f4b1e80648a8f72","url":"references.html"},{"revision":"705ef15a6d510334189149cb8fddc43f","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"3d939e2ce8ee90f7afbc5d15bfa3c22f","url":"simulation/images/distribution.png"},{"revision":"0371539557b44911de205f0db638b7c9","url":"simulation/index.html"},{"revision":"a522d53ed8ad1fff8e49b46ec21e5aab","url":"simulation/js/activity1.js"},{"revision":"cedec47fd0b571a558da185ed5ed90ae","url":"simulation/js/activity2.js"},{"revision":"dea0529683723bca21c8e102d6e3de5d","url":"simulation/js/activity3.js"},{"revision":"73120c201c43df811bef7f41ab85fb95","url":"simulation/js/data.js"},{"revision":"58014965404acd7a115598947f1b595a","url":"simulation/js/euler.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"2949a0a675e0e2a3c0623669d658936e","url":"simulation/js/screen_size.js"},{"revision":"1dc50b07f2c5548c7935fa7146a0e140","url":"theory.html"},{"revision":"ffc816d146665e665692eac3d160057e","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );