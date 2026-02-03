# projeto-plante-uma-casa [dev tests]

# painel-plante-uma-casa [ adm ]

# app-plante-uma-casa [ app ]

a0login
c1login

<!-- comands (EAS / QR Code) -->

npx eas-cli update --branch preview

<!-- CHECKLIST BUILD WEB -->
<!-- 1 - alterar index.tsx initial route '-----' e texto Ver. app 0.1.2 -->
<!-- 2 - alterar fireInit remover 'secondary' -->
<!-- 3 - conferir firebaseconfig qual site esta mandando -->
<!-- 4 - add RequestPermission no c5steps -->
<!-- 5 - buildar pra web -->
<!-- 6 - deploy firebase host -->

<!-- "Buildar" PWA -->

npx expo export --platform web

<!-- Deploy Firebase Host -->

npx firebase-tools deploy --only hosting
