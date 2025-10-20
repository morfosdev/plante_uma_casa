

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'ab0login';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"designsys",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ backgroundColor: "$var_all.colors.primary" }`, `{ padding: 20 }`],

          screenElements:[(...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [
        (...args:any) => <Elements.Accordion pass={{
 configs: [`{ 
	defaultOpenIdx: 0,
	styles: {
			backgroundColor: '#ccc',
			width: "100%",
			borderRadius: 10,
			marginBottom: 14
	}
}`], arrElements: [
 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Elementos de Formulários I`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ backgroundColor: "#EFEFEF", width: "100%", padding: 20 }`],
            arrProps: [],
            arrItems: [
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [" "],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.inputs.ipt1`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
	borderBottomColor: "#444",
	borderBottomWidth: 2
}`],

          path: [`sc.B3.forms.iptsChanges.name`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.B3.forms.iptsChanges.name`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.box1`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `Ocultar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.box1`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `Mostrar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", padding: 5, backgroundColor: "#FFF", flexDirection: "row", alignItems: "center"}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const path = "all.toggles.checkbox1";
  const currState = tools.getCtData(path);
  tools.functions.setVar({
		args: '',
		pass: { keyPath: [path], value: [!currState] },
	});
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "$var_all.colors.secondary", borderRadius: 4, marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkbox1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    {...props}
  >
    <Path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.17}
      d="M33.333 10 15 28.333 6.667 20"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, backgroundColor: "#FFF", borderRadius: 4, borderWidth: 2, borderColor: "#CCC", marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkbox1", "==", false ]]
 , trigger: 'on listen'
}})],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `JavaScript`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ marginTop: 20 }`
          ],

          children: [
            `Check Dentro de Lista`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`users`],
            arrFuncs: [()=>{}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `GetDocs: users`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
const item = tools.findFlatItem([[{idx: 0, item: {name: "João"}}]]);

console.log({item});
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Testar findFlatItem.ts`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.IptPicker pass={{
 configs: [`{
	searchable: true,
	pathItems: "sc.B3.statics.picker1",
	maxVisibleItems: 8,
	style: {backgroundColor: "#fff"},
	inputStyle: {
		backgroundColor: "#fff"
	},
	dropdownStyle: {
		backgroundColor: "#fff"
	},
	itemStyle: {
		backgroundColor: "#fff"
	}
}`], arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.B3.forms.iptsChanges.options`],
          value: [`$arg_callback`]
        }})], args 
 }}/>, 
        (...args:any) => <Elements.IptPicker pass={{
 configs: [`{
	searchable: false,
	pathItems: "sc.B3.statics.picker1",
	maxVisibleItems: 4
}`], arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.B3.forms.iptsChanges.options`],
          value: [`$arg_callback`]
        }})], args 
 }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
	keyboardType: 'phone-pad',
	maxLength: 20
}`],

          stylesArray: [`{ 
	padding: 8,
	paddingLeft: 2,
	borderBottomColor: "$var_all.colors.primary",
	borderBottomWidth: 2,
	marginBottom: 16,
	textAlign: "left"
}`],

          path: [`sc.A0.forms.iptsChanges.pass`],

          funcsArray: [(txt) => {
const digits = String(txt).replace(/[^0-9]/g, '').slice(0, 11);
  const ddd = digits.slice(0, 2);
  const isCel = digits.length > 10;
  const first = digits.slice(2, isCel ? 7 : 6);
  const last  = digits.slice(isCel ? 7 : 6, isCel ? 11 : 10);

  const mask =
    (ddd ? '(' + ddd + ') ' : '') +
    (first ? first : '') +
    (last ? ' - ' + last : '');

  console.log({ mask });
	tools.setData({path: "sc.A0.forms.iptsChanges.pass", value: mask });
}],

          args,
        }}/>, (...args:any) => <Elements.Accordion pass={{
 configs: [`{ 
	defaultOpenIdx: 0,
	styles: {
			backgroundColor: '#ccc',
			width: "100%",
			borderRadius: 10,
			marginBottom: 14
	}
}`], arrElements: [
 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Opção X`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Opção X`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Opção X`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ], args 
 }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Elementos Base I`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: "row",
  backgroundColor: "#0064fe",
  alignItems: "center",
  width: "100%",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.box1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: 30,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  textAlign: "left",
}`
          ],

          children: [
            `Minha Tela`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

 (...args:any) => <Elements.Custom pass={{
  arrItems: [() => {
  const [userName, setUserName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [mensagemErro, setMensagemErro] = React.useState("");
  const handleLogin = () => {
    if (!userName.trim()) {
      setMensagemErro("O nome de usuário precisa ser preenchido.");
      return;
    }
    if (!userPassword.trim()) {
      setMensagemErro("A senha precisa ser preenchida.");
      return;
    }

    setMensagemErro("");
    console.log("Login realizado com sucesso!");
const path1 = "all.toggles.box1";
    const value = false;
    const pass1 = { keyPath: [path1], value: [value] };
    tools.functions.setVar({ args: "", pass: pass1 });
  };

  return (
    <RN.View
      style={{
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
       flex: 1,
      }}
    >
      <RN.TextInput
        placeholder="Nome de usuário"
        style={{
          borderWidth: 1,
          borderColor: "#65686e",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 8,
          marginBottom: 10,
        }}
        value={userName}
        onChangeText={setUserName}
      />

      <RN.TextInput
        placeholder="Senha"
        style={{
          borderWidth: 1,
          borderColor: "#65686e",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 8,
        }}
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
      />

      {mensagemErro !== "" && (
        <RN.Text
          style={{
            color: "red",
            marginBottom: 10,
          }}
        >
          {mensagemErro}
        </RN.Text>
      )}

      <RN.Pressable
        style={{
          backgroundColor: "#007BFF",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={handleLogin}
      >
        <RN.Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
          }}
        >
          Login
        </RN.Text>
      </RN.Pressable>
    </RN.View>
  );
}] 
}}/>
],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.box1`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `Mostrar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.box1`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `Ocultar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Entrar c/ Google`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{
	backgroundColor: "$var_all.colors.primary",
	paddingHorizontal: 35,
	height: 70,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 98,
	height: 59,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/planteUmaCasa%2Fplante%20uma%20casa%20logo.png?alt=media&token=2badfafe-64e9-4e4b-a62c-c1a30fb91f58`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 30,
	height: 30,
	borderRadius: 200
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ 
	color: 'white',
 }`
          ],

          children: [
            `Admin`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "$var_all.colors.primary",
	alignItems: "center",
}

`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
	color: "#FFF"
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "$var_all.colors.primary",
	alignItems: "center",
}

`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.c3Menu`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg     xmlns="http://www.w3.org/2000/svg"
width={14}     height={12}     fill="red"     viewBox="0 0 14 12"     {...props}   >
<Path       stroke="#FFF"       strokeLinecap="round"       strokeLinejoin="round"       d="M13.5 1H.5m13 5H.5m13 5H.5"     />   </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
	color: "#FFF"
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "80%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ backgroundColor: "#EFEFEF", width: "100%", padding: 20 }`],
            arrProps: [],
            arrItems: [
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '20%',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#0E1422" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Estilos Base I`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ alignItems: "center", justifyContent: "center" }`, 
        `{ width: "100%", height: "100%" }`, 
        `{ padding: 20, backgrondColor: "#FFF" }`, 
        `{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`, 
        `{ 
	width: 30,
	height: 30,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`, 
        `{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`, 
        `{ 
	width: 50,
	height: 50,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`, 
        `{ width: "100%", flexDirection: "row", alignItems: "center" }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, 
        `{ width: "100%", flexDirection: "row", alignItems: "flex-end" }`, 
        `{ backgroundColor: "$var_all.colors.primary" }`, 
        `{ flex: 1 }`, 
        `{ 
	width: "80%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, 
        `{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`, 
        `{ color: "#FFF" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Estilos Base I`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Funções Base I`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[
        async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}}), async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ], args 
 }}/>, (...args:any) => <Elements.Accordion pass={{
 configs: [`{ 
	defaultOpenIdx: 0,
	styles: {
			backgroundColor: '#ccc',
			width: "100%",
			borderRadius: 10,
			marginBottom: 14
	}
}`], arrElements: [
 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Meu Titulo`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, 

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
              {
                height: "50px",
                width: "80px",
                backgroundColor: "#FDFDFD",
                borderWidth: 2,
                borderColor: "#EEE"
              }
              ],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Opção X`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Opção X`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Opção X`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ], args 
 }}/>],
            args,
        }}/>],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"ab0login",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ alignItems: "center", justifyContent: "center" }`, `{ backgroundColor: "$var_all.colors.primary" }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "80%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Ir p/ Adm`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Ir p/ Parceiros`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("c1login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Ir p/ APP`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("designsys");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Design System`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a0login",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ alignItems: "center", justifyContent: "center" }`, `{ backgroundColor: "$var_all.colors.smoke" }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	padding: 0
}`, `{ 
	width: 400,
	height: 450,
	backgroundColor: "#FFF",
	borderRadius: 20,
	alignItems: "center",
	shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "400px",
	height: "147px",
	backgroundColor: "$var_all.colors.primary",		
	alignItems: 'center',
	justifyContent: 'center',
	borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 163,
	height: 98,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/planteUmaCasa%2Fplante%20uma%20casa%20logo.png?alt=media&token=2badfafe-64e9-4e4b-a62c-c1a30fb91f58`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 400,
	height: 303,
	backgroundColor: "#FFF",
	alignItems: "center",
	paddingHorizontal: 25,
	paddingVertical: 30,
	borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 14,
	fontWeight: '500',
	color: '#555555',
}`
          ],

          children: [
            `Login`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{ 
	padding: 5,
	borderBottomColor: "#CCCCCC",
	borderBottomWidth: 1,
	width: '100%',
}`],

          path: [`sc.A0.forms.iptsChanges.userEmail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 14,
	fontWeight: '500',
	color: '#555555',
}`
          ],

          children: [
            `Senha`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
	alignItems: 'center',
	width: '105%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{ 
	padding: 5,
	borderBottomColor: "#CCCCCC",
	borderBottomWidth: 1,
	width: '100%',
}`],

          path: [`sc.A0.forms.iptsChanges.userPassword`],

          funcsArray: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [`$arg_callback`]
        }}), (txt) => {
	const x = '';
	console.log({txt});
	tools.setData({path: "sc.A0.forms.iptsChanges.pass2", value: txt });
}],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	right: '30px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="red"
    viewBox="0 0 16 12"
    {...props}
  >
    <Path
      fill="#555"
      d="M15.328 5.758c-.023-.05-.565-1.254-1.771-2.46C11.95 1.691 9.92.842 7.686.842c-2.234 0-4.264.849-5.871 2.456C.609 4.504.064 5.71.044 5.758a.512.512 0 0 0 0 .417c.022.05.565 1.253 1.77 2.46 1.608 1.606 3.638 2.455 5.872 2.455s4.264-.85 5.87-2.456c1.207-1.206 1.75-2.409 1.772-2.46a.513.513 0 0 0 0-.416Zm-7.642 4.307c-1.972 0-3.694-.717-5.12-2.13a8.551 8.551 0 0 1-1.478-1.97 8.538 8.538 0 0 1 1.478-1.969c1.426-1.413 3.148-2.13 5.12-2.13 1.971 0 3.694.717 5.12 2.13a8.548 8.548 0 0 1 1.48 1.97c-.462.862-2.473 4.099-6.6 4.099Zm0-7.174a3.075 3.075 0 1 0 0 6.15 3.075 3.075 0 0 0 0-6.15Zm0 5.124a2.05 2.05 0 1 1 0-4.099 2.05 2.05 0 0 1 0 4.1Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3277 5.75824C15.3052 5.70764 14.7627 4.50412 13.5566 3.29804C11.9496 1.69099 9.91982 0.841675 7.68572 0.841675C5.45162 0.841675 3.42183 1.69099 1.81479 3.29804C0.608708 4.50412 0.063633 5.70956 0.0437772 5.75824C0.0146423 5.82377 -0.000411987 5.89469 -0.000411987 5.96641C-0.000411987 6.03812 0.0146423 6.10904 0.0437772 6.17457C0.0661951 6.22517 0.608708 7.42805 1.81479 8.63414C3.42183 10.2405 5.45162 11.0899 7.68572 11.0899C9.91982 11.0899 11.9496 10.2405 13.5566 8.63414C14.7627 7.42805 15.3052 6.22517 15.3277 6.17457C15.3568 6.10904 15.3719 6.03812 15.3719 5.96641C15.3719 5.89469 15.3568 5.82377 15.3277 5.75824ZM7.68572 10.065C5.71423 10.065 3.99189 9.34831 2.56611 7.93534C1.98112 7.35354 1.48341 6.69014 1.08845 5.96577C1.48325 5.24129 1.98098 4.57787 2.56611 3.99619C3.99189 2.58323 5.71423 1.86649 7.68572 1.86649C9.65721 1.86649 11.3795 2.58323 12.8053 3.99619C13.3915 4.57778 13.8903 5.24119 14.2862 5.96577C13.8244 6.82789 11.8125 10.065 7.68572 10.065ZM7.68572 2.89131C7.07765 2.89131 6.48324 3.07163 5.97764 3.40945C5.47205 3.74728 5.07799 4.22744 4.84529 4.78922C4.6126 5.35101 4.55171 5.96918 4.67034 6.56556C4.78897 7.16195 5.08178 7.70976 5.51175 8.13973C5.94172 8.56971 6.48954 8.86252 7.08592 8.98115C7.68231 9.09978 8.30048 9.03889 8.86226 8.80619C9.42405 8.57349 9.90421 8.17943 10.242 7.67384C10.5799 7.16825 10.7602 6.57384 10.7602 5.96577C10.7593 5.15063 10.4351 4.36912 9.85875 3.79273C9.28236 3.21635 8.50086 2.89216 7.68572 2.89131ZM7.68572 8.0154C7.28034 8.0154 6.88406 7.89519 6.547 7.66998C6.20994 7.44476 5.94723 7.12465 5.7921 6.75013C5.63697 6.37561 5.59638 5.96349 5.67547 5.5659C5.75455 5.16831 5.94976 4.8031 6.23641 4.51645C6.52305 4.22981 6.88826 4.0346 7.28586 3.95551C7.68345 3.87643 8.09556 3.91702 8.47008 4.07215C8.8446 4.22728 9.16471 4.48999 9.38993 4.82705C9.61515 5.16411 9.73536 5.56039 9.73536 5.96577C9.73536 6.50936 9.51941 7.0307 9.13503 7.41508C8.75065 7.79946 8.22932 8.0154 7.68572 8.0154Z" fill="#555555"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "sc.A0.forms.showErr", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: "red"
}`
          ],

          children: [
            `$var_sc.A0.forms.msgs.msg1`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 30,
	height: 30,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 130,
	height: 36,
	borderRadius: 10,
	paddingHorizontal: 30,
	paddingVertical: 8,
	backgroundColor: '#315E2D',
	alignItems: 'center',
	justifyContent: 'center',
	shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 20,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async () => {
  console.log('Login Firebase c/ Email e Senha');

  const rawEmail = tools.getCtData('sc.A0.forms.iptsChanges.userEmail');
  const rawSenha = tools.getCtData('sc.A0.forms.iptsChanges.userPassword');
  const email = (rawEmail ?? '').trim();
  const senha = rawSenha ?? '';

  if (!email || !senha) {
    tools.setData({ path: 'sc.A0.forms.showErr', value: true });
    tools.setData({
      path: 'sc.A0.forms.msgs.msg1',
      value: 'Informe e-mail e senha.',
    });
    return;
  }

  // Auth
  const { getAuth, signInWithEmailAndPassword } = await import('firebase/auth');

  // Garantir app inicializado
  let fbInit = tools.getCtData('all.temp.fireInit');
  if (!fbInit) {
    const { initializeApp, getApps } = await import('firebase/app');
    const cfg = tools.getCtData('all.temp.fireConfig'); // opcional: pegue sua config do CT
    fbInit = getApps().length ? getApps()[0] : initializeApp(cfg);
    tools.setData({ path: 'all.temp.fireInit', value: fbInit });
  }

  const auth = getAuth(fbInit);
  console.log('Login Firebase c/ Email e Senha → auth ok');

  try {
    const cred = await signInWithEmailAndPassword(auth, email, senha);
    console.log('Usuário logado:', cred.user.uid);

    // Firestore
    const { getFirestore, doc, getDoc } = await import('firebase/firestore');
    const db = getFirestore(fbInit);

    const snap = await getDoc(doc(db, 'users', cred.user.uid));
    if (!snap.exists()) {
      // Opcional: crie doc padrão em vez de lançar erro
      // import { setDoc } from "firebase/firestore"; await setDoc(doc(db,"users", cred.user.uid), { typeAccount:"app", userAuthID: cred.user.uid, userEmail: email });
      throw new Error('PERFIL_INEXISTENTE');
    }

    const data = snap.data();

    // Guarda no seu state/context
    tools.setData({
      path: 'all.authUser',
      value: { uid: cred.user.uid, email: cred.user.email, ...data },
    });

    // Roteamento por tipo de conta
    const typeAccount = data?.typeAccount; // "adm" | "app" | "partner"
    if (typeAccount === 'adm') tools.goTo('a4list');
    else if (typeAccount === 'app') tools.goTo('b1list');
    else if (typeAccount === 'partner') tools.goTo('a2list');
    else {
      // fallback
      tools.setData({ path: 'sc.A0.forms.showErr', value: true });
      tools.setData({
        path: 'sc.A0.forms.msgs.msg1',
        value:
          'O email ' +
          cred.user.email +
          ' não tem permissão de acesso. Contate o Administrador.',
      });
    }

    return cred.user;
  } catch (err: any) {
    console.error('Erro no login:', err);

    const code = err?.code || err?.message || '';
    let msg = 'Email ou Senha inválidos.';

    if (code.includes('auth/invalid-email')) msg = 'E-mail inválido.';
    else if (
      code.includes('auth/wrong-password') ||
      code.includes('auth/user-not-found')
    )
      msg = 'Usuário ou senha incorretos.';
    else if (code.includes('auth/too-many-requests'))
      msg = 'Muitas tentativas. Aguarde alguns minutos.';
    else if (code.includes('PERFIL_INEXISTENTE'))
      msg = 'Perfil do usuário não encontrado. Contate o suporte.';

    tools.setData({ path: 'sc.A0.forms.showErr', value: true });
    tools.setData({ path: 'sc.A0.forms.msgs.msg1', value: msg });
    return;
  }
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	color: "#FFF",
	fontSize: 15,
	fontWeight: '500',
}`
          ],

          children: [
            `Confirmar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 30,
	height: 30,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "auto" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0bforgotpass");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '#555555',
	fontSize: 14,
	fontWeight: '400',
}`
          ],

          children: [
            `Esqueceu sua senha?`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a0bforgotpass",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ alignItems: "center", justifyContent: "center" }`, `{ backgroundColor: "$var_all.colors.smoke" }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "80%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 80,
	height: 30
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{ placeholder: "Informe seu e-mail" }`],

          stylesArray: [`{ 
	padding: 8,
	paddingLeft: 2,
	borderBottomColor: "$var_all.colors.primary",
	borderBottomWidth: 2,
	marginBottom: 16,
	textAlign: "left"
}`],

          path: [`sc.A0B.forms.iptsChanges.userEmail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "sc.A0B.forms.showErr", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: "red"
}`
          ],

          children: [
            `$var_sc.A0B.forms.msgs.msg1`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "sc.A0B.forms.showSuccess", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{
	color: "green"
}`, `{ paddingHorizontal: 0, textAlign: "center" }`
          ],

          children: [
            `$var_sc.A0B.forms.msgs.msg2`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async () => {
  const path = 'sc.A0B.forms.iptsChanges.userEmail';
  const raw = tools.getCtData(path);
  const email = (raw ?? '').trim();

  if (!email) {
    tools.setData({ path: 'sc.A0B.forms.showErr', value: true });
    tools.setData({
      path: 'sc.A0B.forms.msgs.msg1',
      value: 'Informe um e-mail válido.',
    });
    return;
  }

  const { getAuth, sendPasswordResetEmail } = await import('firebase/auth');
  let fbInit = tools.getCtData('all.temp.fireInit');
  const auth = fbInit ? getAuth(fbInit) : getAuth();

  try {
    await sendPasswordResetEmail(auth, email);

    tools.setData({ path: 'sc.A0B.forms.showErr', value: false });
    tools.setData({ path: 'sc.A0B.forms.showSuccess', value: true });
    tools.setData({
      path: 'sc.A0B.forms.msgs.msg2',
      value:
        'Enviamos as instruções para redefinir a senha no e-mail informado.',
    });
  } catch (e) {
    // mapeia alguns erros comuns
    let msg = 'Não foi possível enviar o e-mail de redefinição.';
    if (e?.code === 'auth/invalid-email') msg = 'E-mail inválido.';
    if (e?.code === 'auth/too-many-requests')
      msg = 'Muitas tentativas. Tente novamente mais tarde.';
    // obs: Firebase pode retornar sucesso mesmo se o e-mail não existir, por segurança

    console.log('Erro reset senha:', e?.code || e?.message);
    tools.setData({ path: 'sc.A0B.forms.showSuccess', value: false });
    tools.setData({ path: 'sc.A0B.forms.showErr', value: true });
    tools.setData({ path: 'sc.A0B.forms.msgs.msg1', value: msg });
  }
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Enviar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a0csignup",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ alignItems: "center", justifyContent: "center" }`, `{ backgroundColor: "$var_all.colors.smoke" }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "80%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 80,
	height: 30
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{ 
	padding: 8,
	paddingLeft: 2,
	borderBottomColor: "$var_all.colors.primary",
	borderBottomWidth: 2,
	marginBottom: 16,
	textAlign: "left"
}`],

          path: [`sc.A0.forms.iptsChanges.userEmail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{ 
	padding: 8,
	paddingLeft: 2,
	borderBottomColor: "$var_all.colors.primary",
	borderBottomWidth: 2,
	marginBottom: 16,
	textAlign: "left"
}`],

          path: [`sc.A0.forms.iptsChanges.userPassword`],

          funcsArray: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [`$arg_callback`]
        }}), (txt) => {
	const x = '';
	console.log({txt});
	tools.setData({path: "sc.A0.forms.iptsChanges.pass2", value: txt });
}],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "sc.A0.forms.showErr", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: "red"
}`
          ],

          children: [
            `$var_sc.A0.forms.msgs.msg1`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async () => {
  // Lê inputs
  const email = (
    tools.getCtData('sc.A0C.forms.iptsChanges.userEmail') ?? 'adm@teste.com'
  ).trim();
  const senha = (
    tools.getCtData('sc.A0C.forms.iptsChanges.userPassword') ?? '123456'
  ).trim();
  const nome = (
    tools.getCtData('sc.A0C.forms.iptsChanges.userName') ?? 'Admin'
  ).trim();

  // Helpers p/ mensagens (ajuste os paths conforme seu UI)
  const showMsg = (text: string, isError = false) => {
    tools.setData({ path: 'sc.A0C.forms.showMsg', value: true });
    tools.setData({ path: 'sc.A0C.forms.showErr', value: isError });
    tools.setData({ path: 'sc.A0C.forms.msgs.msg1', value: text });
  };

  if (!email || !senha) {
    showMsg('Informe e-mail e senha.', true);
    return;
  }
  if (senha.length < 6) {
    showMsg('A senha deve ter ao menos 6 caracteres.', true);
    return;
  }

  // SDK imports
  const {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
  } = await import('firebase/auth');

  // Reaproveita app/auth se já existir
  const fbInit = tools.getCtData('all.temp.fireInit');
  const auth = fbInit ? getAuth(fbInit) : getAuth();

  // (Opcional) use seu domínio/dynamic link
  const actionCodeSettings =
    tools.getCtData('all.temp.actionCodeSettings') || undefined;

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, senha);

    if (nome) {
      await updateProfile(cred.user, { displayName: nome });
    }

    await sendEmailVerification(cred.user, actionCodeSettings);

    // Mensagem de sucesso
    showMsg(
      'Conta criada. Enviamos um e-mail de verificação. Confirme para usar todos os recursos.',
      false,
    );

    // (Opcional) limpar campos / navegar
    tools.setData({
      path: 'sc.A0C.forms.iptsChanges',
      value: { userEmail: '', userPassword: '', userName: '' },
    });
    tools.goTo('login');
  } catch (e: any) {
    let msg = 'Não foi possível criar a conta.';
    switch (e?.code) {
      case 'auth/email-already-in-use':
        msg = 'Este e-mail já está em uso.';
        break;
      case 'auth/invalid-email':
        msg = 'E-mail inválido.';
        break;
      case 'auth/weak-password':
        msg = 'Senha muito fraca.';
        break;
      default:
        // console.log(e);
        break;
    }
    showMsg(msg, true);
  }
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Criar Conta`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "auto" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0bforgotpass");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '$var_all.colors.primary'
}`
          ],

          children: [
            `Recuperar Senha`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a4list",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{
	backgroundColor: "$var_all.colors.primary",
	paddingHorizontal: 35,
	height: 70,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 98,
	height: 59,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/planteUmaCasa%2Fplante%20uma%20casa%20logo.png?alt=media&token=2badfafe-64e9-4e4b-a62c-c1a30fb91f58`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 30,
	height: 30,
	borderRadius: 200
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ 
	color: 'white',
 }`
          ],

          children: [
            `Admin`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ width: "100%", height: "100%" }`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 200,
	height: "100%",
	backgroundColor: "white"
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.profile`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Meu Perfil`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Condomínios`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [undefined]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Sair`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
	height: "100%",
	backgroundColor: '#f5f5f5',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: '100%',
	height: 100,
	backgroundColor: '#a6a6a6',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingHorizontal: 45,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 26,
	fontWeight: '700',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '400',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Lista de condomínios`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	height: 30,
	backgroundColor: 'transparent',
	paddingHorizontal: 30,
	paddingVertical: 8,
	borderWidth: 2,
	borderRadius: 20,
	borderColor: 'white',
	justifyContent: 'center',
	alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '700',
	color: 'white',
}`
          ],

          children: [
            `CRIAR NOVO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a1.list`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
flexDirection: 'row',
paddingHorizontal: '60px',
paddingVertical: '30px',
backgroundColor: 'transparent',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges`],
          value: [`$arg_item`]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 16,
fontWeight: '700',
color: '#0D141C',
}`
          ],

          children: [
            `$arg_condo`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '400',
color: '#4A739C',
}`
          ],

          children: [
            `$arg_address`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 15,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
	width: 300,
	zIndex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	backgroundColor: '#E8EDF5',
	paddingHorizontal: 16,
	paddingVertical: 8,
	borderRadius: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a11list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
}`
          ],

          children: [
            `Parceiros`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 15,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	backgroundColor: '#E8EDF5',
	paddingHorizontal: 16,
	paddingVertical: 8,
	borderRadius: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
}`
          ],

          children: [
            `Lotes - Proprietário`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '260px',
	height: '160px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:[`https://www.condominioterranovabauru.com.br/cdn/fotos/portaria_terra_nova_bauru.jpg`],

      args,
    }}/>],

            args,
          }}/>
        
          ],

      styles:[`{
width: '100%',
}`],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 300,
	height: "100%",
	position: 'absolute',
	right: 0,
	top: -70,
	zIndex: 1,
	alignItems: 'center',
	backgroundColor: 'transparent',
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.sideRight", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 6,
	paddingHorizontal: 18,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 18,
	borderWidth: 1,
	borderColor: '#f5f5f5',
	borderRadius: 20,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 20,
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Ex: Residência dos Silvas",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Rua das Flores, 123',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
multiline: 'true',
}`],

          stylesArray: [`{
borderWidth: 1,
borderColor: '#ccc',
padding: 5,
height: 80,
borderRadius: 10,
}`],

          path: [`sc.a1.iptChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a1.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.profile", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.profile`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `PERFIL DO ADMINISTRADOR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
height: '100%',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{	
	backgroundColor: 'white',
	paddingHorizontal: 35,
	paddingVertical: 8,
	borderRadius: 22,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#777777',
fontSize: 12,
fontWeight: '700',
}`
          ],

          children: [
            `$var_all.authUser.email`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.editCondo", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 6,
	paddingHorizontal: 18,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 18,
	borderWidth: 1,
	borderColor: '#f5f5f5',
	borderRadius: 20,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 20,
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Ex: Residência dos Silvas",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Rua das Flores, 123',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
multiline: 'true',
}`],

          stylesArray: [`{
borderWidth: 1,
borderColor: '#ccc',
padding: 5,
height: 80,
borderRadius: 10,
}`],

          path: [`sc.a1.editChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `mockCondos`, `$var_sc.a1.editChanges.docId`],
            arrPathData: [`sc.a1.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a7.editOwner", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `CADASTRO LOTE / PROPRIETÁRIO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 14,
	paddingHorizontal: 18,
	width: '100%',
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Proprietário`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerMail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerMail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Obra`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Área`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Valor total da obra`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Valor total da entrada`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a7.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a12.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `CADASTRO PARCEIRO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 14,
	paddingHorizontal: 18,
	width: '100%',
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerMail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerMail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Área de Atuação`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 5, marginTop: 10, textAlign: "center" }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "red" }`
          ],

          children: [
            `$var_sc.A12.msgs.msg1`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async () => {
  try {
    const pathName = 'sc.A12.forms.iptsChanges.partnerName';
    const pathEmail = 'sc.A12.forms.iptsChanges.partnerMail';
    const pathPartner = 'sc.A12.forms.iptsChanges.partnerActivity';

    const name = (tools.getCtData(pathName) ?? '').trim();
    const email = (tools.getCtData(pathEmail) ?? '').trim();
    const partnerActivity = (tools.getCtData(pathPartner) ?? '').trim();
    console.log({ name, email });

    const validateEmail = (v: string) => v.includes('@') && v.includes('.');
    console.log({ validateEmail: validateEmail(email) });

    if (name === "") {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Preencha o Nome.' });
      return;
    }
    if (email === "") {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Preencha o Email.' });
      return;
    }

    if (!validateEmail(email)) {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Email inválido.' });
      return;
    }

    // Auth
    const { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, fetchSignInMethodsForEmail } =
      await import('firebase/auth');

    const fbInit = tools.getCtData('all.temp.fireInit');
    console.log({ fbInit });
    const auth = fbInit ? getAuth(fbInit) : getAuth();

    // ---- Pré-checagem opcional: já existe?
    const methods = await fetchSignInMethodsForEmail(auth, email);
console.log({ methods });
    if (methods.length > 0) {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Esse usuário já foi criado anteriormente' });
      return; // quebra o fluxo
    }

    const tempPass = '123456'; // ou gere uma senha aleatória
    console.log({ tempPass });
    const cred = await createUserWithEmailAndPassword(auth, email, tempPass);
    console.log({ cred });


    if (name) {
      await updateProfile(cred.user, { displayName: name });
    }

    // >>>>>>>>>>>>>>> ADIÇÃO: criar/atualizar doc em 'users'
    {
      const { getFirestore, doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const db = fbInit ? getFirestore(fbInit) : getFirestore();

      const uid = cred.user.uid;
      const dataToSet = {
        docId: uid,
        createdAt: serverTimestamp(),
        userName: name,
        userEmail: email,
        partnerActivity,
        typeAccount: "partner",
      };

      await setDoc(doc(db, 'users', uid), dataToSet, { merge: true });
      console.log('users doc criado/atualizado:', { uid, dataToSet });
    }
    // <<<<<<<<<<<<<<< FIM DA ADIÇÃO

    // (opcional) enviar verificação
    await sendEmailVerification(cred.user);
    await sendPasswordResetEmail(auth, email);

    tools.setData({ path: 'sc.A12.forms.showErr', value: false });
    tools.setData({ path: 'sc.A12.forms.showSuccess', value: true });
    tools.setData({ path: 'sc.A12.forms.msgs.msg1', value: 'Usuário criado com sucesso' });

    // const delay = () => {
    //   tools.setData({ path: 'all.toggles.sideRight', value: false });
    //   tools.setData({ path: 'all.toggles.a12.add', value: false });
    // }

    // sucesso...
  } catch (e: any) {
    // trate erros (email-already-in-use, invalid-email, weak-password, etc.)
    tools.setData({ path: 'sc.A12.forms.showErr', value: true });
    tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Erro ao Criar Parceiro. ' + e.message });
  }
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a12.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a10.addFinance", "==", true ]

]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `FINANCEIRO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Quantidade de Parcelas`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installments`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installments`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Valor`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installmentValue`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installmentValue`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installmentDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installmentDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a10.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a10.addFinance`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a10.addFinance`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`condos`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.list`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a7list",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{
	backgroundColor: "$var_all.colors.primary",
	paddingHorizontal: 35,
	height: 70,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 98,
	height: 59,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/planteUmaCasa%2Fplante%20uma%20casa%20logo.png?alt=media&token=2badfafe-64e9-4e4b-a62c-c1a30fb91f58`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 30,
	height: 30,
	borderRadius: 200
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ 
	color: 'white',
 }`
          ],

          children: [
            `Admin`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ width: "100%", height: "100%" }`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 200,
	height: "100%",
	backgroundColor: "white"
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.profile`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Meu Perfil`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Condomínios`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [undefined]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Sair`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
	height: "100%",
	backgroundColor: '#f5f5f5',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: '100%',
	height: 100,
	backgroundColor: '#a6a6a6',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingHorizontal: 45,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 7,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="m11.438 19.25-6.75-6.75 6.75-6.75M5.625 12.5h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4375 19.25L4.6875 12.5L11.4375 5.75M5.625 12.5H19.3125" stroke="#F5F5F5" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 26,
	fontWeight: '700',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Lotes - Proprietário`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '400',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Lista dos proprietários`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	height: 30,
	backgroundColor: 'transparent',
	paddingHorizontal: 30,
	paddingVertical: 8,
	borderWidth: 2,
	borderRadius: 20,
	borderColor: 'white',
	justifyContent: 'center',
	alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '700',
	color: 'white',
}`
          ],

          children: [
            `CRIAR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	paddingHorizontal: 60,
	paddingVertical: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
	paddingVertical: 10,
	paddingHorizontal: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Proprietário`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Lote`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Área`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            ``
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 15,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{
borderRadius: 12,
}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a1.list`,

          itemElements: [
            
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',
backgroundColor: 'white',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 12,
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.1,
shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
	flexDirection: 'row',
	alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_owner`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_email`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_lot`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_area`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "fit-content", 
	minWidth: 120, 
	height: 30, 
	backgroundColor: "#fff",
	borderRadius: 20, 
	alignItems: "center",
	justifyContent: "center",
	borderWidth: 2,
	borderColor: "#315e2d",
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a9finManagement");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ color: "#FFF" }`, `{
	color: "#315e2d",
	fontSize: 12,
	fontWeight: 'bold', 
}`
          ],

          children: [
            `Gestão Financeira`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 25,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        
          ],

      styles:[`{
width: '100%',
}`],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 300,
	height: "100%",
	position: 'absolute',
	right: 0,
	top: -70,
	zIndex: 1,
	alignItems: 'center',
	backgroundColor: 'transparent',
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.sideRight", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 6,
	paddingHorizontal: 18,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 18,
	borderWidth: 1,
	borderColor: '#f5f5f5',
	borderRadius: 20,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 20,
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Ex: Residência dos Silvas",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Rua das Flores, 123',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
multiline: 'true',
}`],

          stylesArray: [`{
borderWidth: 1,
borderColor: '#ccc',
padding: 5,
height: 80,
borderRadius: 10,
}`],

          path: [`sc.a1.iptChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a1.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.profile", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.profile`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `PERFIL DO ADMINISTRADOR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
height: '100%',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{	
	backgroundColor: 'white',
	paddingHorizontal: 35,
	paddingVertical: 8,
	borderRadius: 22,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#777777',
fontSize: 12,
fontWeight: '700',
}`
          ],

          children: [
            `$var_all.authUser.email`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.editCondo", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 6,
	paddingHorizontal: 18,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 18,
	borderWidth: 1,
	borderColor: '#f5f5f5',
	borderRadius: 20,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 20,
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Ex: Residência dos Silvas",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Rua das Flores, 123',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
multiline: 'true',
}`],

          stylesArray: [`{
borderWidth: 1,
borderColor: '#ccc',
padding: 5,
height: 80,
borderRadius: 10,
}`],

          path: [`sc.a1.editChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `mockCondos`, `$var_sc.a1.editChanges.docId`],
            arrPathData: [`sc.a1.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a7.editOwner", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `CADASTRO LOTE / PROPRIETÁRIO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 14,
	paddingHorizontal: 18,
	width: '100%',
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Proprietário`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerMail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerMail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Obra`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Área`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Valor total da obra`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Valor total da entrada`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a7.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a12.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `CADASTRO PARCEIRO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 14,
	paddingHorizontal: 18,
	width: '100%',
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerMail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerMail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Área de Atuação`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 5, marginTop: 10, textAlign: "center" }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "red" }`
          ],

          children: [
            `$var_sc.A12.msgs.msg1`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async () => {
  try {
    const pathName = 'sc.A12.forms.iptsChanges.partnerName';
    const pathEmail = 'sc.A12.forms.iptsChanges.partnerMail';
    const pathPartner = 'sc.A12.forms.iptsChanges.partnerActivity';

    const name = (tools.getCtData(pathName) ?? '').trim();
    const email = (tools.getCtData(pathEmail) ?? '').trim();
    const partnerActivity = (tools.getCtData(pathPartner) ?? '').trim();
    console.log({ name, email });

    const validateEmail = (v: string) => v.includes('@') && v.includes('.');
    console.log({ validateEmail: validateEmail(email) });

    if (name === "") {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Preencha o Nome.' });
      return;
    }
    if (email === "") {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Preencha o Email.' });
      return;
    }

    if (!validateEmail(email)) {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Email inválido.' });
      return;
    }

    // Auth
    const { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, fetchSignInMethodsForEmail } =
      await import('firebase/auth');

    const fbInit = tools.getCtData('all.temp.fireInit');
    console.log({ fbInit });
    const auth = fbInit ? getAuth(fbInit) : getAuth();

    // ---- Pré-checagem opcional: já existe?
    const methods = await fetchSignInMethodsForEmail(auth, email);
console.log({ methods });
    if (methods.length > 0) {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Esse usuário já foi criado anteriormente' });
      return; // quebra o fluxo
    }

    const tempPass = '123456'; // ou gere uma senha aleatória
    console.log({ tempPass });
    const cred = await createUserWithEmailAndPassword(auth, email, tempPass);
    console.log({ cred });


    if (name) {
      await updateProfile(cred.user, { displayName: name });
    }

    // >>>>>>>>>>>>>>> ADIÇÃO: criar/atualizar doc em 'users'
    {
      const { getFirestore, doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const db = fbInit ? getFirestore(fbInit) : getFirestore();

      const uid = cred.user.uid;
      const dataToSet = {
        docId: uid,
        createdAt: serverTimestamp(),
        userName: name,
        userEmail: email,
        partnerActivity,
        typeAccount: "partner",
      };

      await setDoc(doc(db, 'users', uid), dataToSet, { merge: true });
      console.log('users doc criado/atualizado:', { uid, dataToSet });
    }
    // <<<<<<<<<<<<<<< FIM DA ADIÇÃO

    // (opcional) enviar verificação
    await sendEmailVerification(cred.user);
    await sendPasswordResetEmail(auth, email);

    tools.setData({ path: 'sc.A12.forms.showErr', value: false });
    tools.setData({ path: 'sc.A12.forms.showSuccess', value: true });
    tools.setData({ path: 'sc.A12.forms.msgs.msg1', value: 'Usuário criado com sucesso' });

    // const delay = () => {
    //   tools.setData({ path: 'all.toggles.sideRight', value: false });
    //   tools.setData({ path: 'all.toggles.a12.add', value: false });
    // }

    // sucesso...
  } catch (e: any) {
    // trate erros (email-already-in-use, invalid-email, weak-password, etc.)
    tools.setData({ path: 'sc.A12.forms.showErr', value: true });
    tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Erro ao Criar Parceiro. ' + e.message });
  }
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a12.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a10.addFinance", "==", true ]

]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `FINANCEIRO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Quantidade de Parcelas`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installments`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installments`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Valor`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installmentValue`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installmentValue`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installmentDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installmentDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a10.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a10.addFinance`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a10.addFinance`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`lots`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.list`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a9finManagement",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{
	backgroundColor: "$var_all.colors.primary",
	paddingHorizontal: 35,
	height: 70,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 98,
	height: 59,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/planteUmaCasa%2Fplante%20uma%20casa%20logo.png?alt=media&token=2badfafe-64e9-4e4b-a62c-c1a30fb91f58`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 30,
	height: 30,
	borderRadius: 200
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ 
	color: 'white',
 }`
          ],

          children: [
            `Admin`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ width: "100%", height: "100%" }`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 200,
	height: "100%",
	backgroundColor: "white"
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.profile`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Meu Perfil`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Condomínios`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [undefined]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Sair`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
	height: "100%",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: '100%',
	height: 100,
	backgroundColor: '#a6a6a6',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingHorizontal: 45,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 7,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="m11.438 19.25-6.75-6.75 6.75-6.75M5.625 12.5h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4375 19.25L4.6875 12.5L11.4375 5.75M5.625 12.5H19.3125" stroke="#F5F5F5" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 26,
	fontWeight: '700',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Lotes - Proprietário`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '400',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Gestão Financeira`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	height: 30,
	backgroundColor: 'transparent',
	paddingHorizontal: 30,
	paddingVertical: 8,
	borderWidth: 2,
	borderRadius: 20,
	borderColor: 'white',
	justifyContent: 'center',
	alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a10.addFinance`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '700',
	color: 'white',
}`
          ],

          children: [
            `CRIAR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	paddingHorizontal: 60,
	paddingVertical: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Valor Total da Obra`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `R$ 2.200.000`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
	paddingVertical: 20,
	paddingHorizontal: 40,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Valor Pago`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Quantidade de Parcelas`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Comprovante`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 15,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a1.list`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',
backgroundColor: 'white',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 12,
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.1,
shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_condo`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_address`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[`{
width: '100%',
}`],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 300,
	height: "100%",
	position: 'absolute',
	right: 0,
	top: -70,
	zIndex: 1,
	alignItems: 'center',
	backgroundColor: 'transparent',
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.sideRight", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 6,
	paddingHorizontal: 18,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 18,
	borderWidth: 1,
	borderColor: '#f5f5f5',
	borderRadius: 20,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 20,
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Ex: Residência dos Silvas",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Rua das Flores, 123',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
multiline: 'true',
}`],

          stylesArray: [`{
borderWidth: 1,
borderColor: '#ccc',
padding: 5,
height: 80,
borderRadius: 10,
}`],

          path: [`sc.a1.iptChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a1.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.profile", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.profile`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `PERFIL DO ADMINISTRADOR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
height: '100%',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{	
	backgroundColor: 'white',
	paddingHorizontal: 35,
	paddingVertical: 8,
	borderRadius: 22,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#777777',
fontSize: 12,
fontWeight: '700',
}`
          ],

          children: [
            `$var_all.authUser.email`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.editCondo", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 6,
	paddingHorizontal: 18,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 18,
	borderWidth: 1,
	borderColor: '#f5f5f5',
	borderRadius: 20,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 20,
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Ex: Residência dos Silvas",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Rua das Flores, 123',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
multiline: 'true',
}`],

          stylesArray: [`{
borderWidth: 1,
borderColor: '#ccc',
padding: 5,
height: 80,
borderRadius: 10,
}`],

          path: [`sc.a1.editChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `mockCondos`, `$var_sc.a1.editChanges.docId`],
            arrPathData: [`sc.a1.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a7.editOwner", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `CADASTRO LOTE / PROPRIETÁRIO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 14,
	paddingHorizontal: 18,
	width: '100%',
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Proprietário`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerMail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerMail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Obra`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Área`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Valor total da obra`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Valor total da entrada`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a7.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a12.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `CADASTRO PARCEIRO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 14,
	paddingHorizontal: 18,
	width: '100%',
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerMail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerMail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Área de Atuação`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 5, marginTop: 10, textAlign: "center" }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "red" }`
          ],

          children: [
            `$var_sc.A12.msgs.msg1`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async () => {
  try {
    const pathName = 'sc.A12.forms.iptsChanges.partnerName';
    const pathEmail = 'sc.A12.forms.iptsChanges.partnerMail';
    const pathPartner = 'sc.A12.forms.iptsChanges.partnerActivity';

    const name = (tools.getCtData(pathName) ?? '').trim();
    const email = (tools.getCtData(pathEmail) ?? '').trim();
    const partnerActivity = (tools.getCtData(pathPartner) ?? '').trim();
    console.log({ name, email });

    const validateEmail = (v: string) => v.includes('@') && v.includes('.');
    console.log({ validateEmail: validateEmail(email) });

    if (name === "") {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Preencha o Nome.' });
      return;
    }
    if (email === "") {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Preencha o Email.' });
      return;
    }

    if (!validateEmail(email)) {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Email inválido.' });
      return;
    }

    // Auth
    const { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, fetchSignInMethodsForEmail } =
      await import('firebase/auth');

    const fbInit = tools.getCtData('all.temp.fireInit');
    console.log({ fbInit });
    const auth = fbInit ? getAuth(fbInit) : getAuth();

    // ---- Pré-checagem opcional: já existe?
    const methods = await fetchSignInMethodsForEmail(auth, email);
console.log({ methods });
    if (methods.length > 0) {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Esse usuário já foi criado anteriormente' });
      return; // quebra o fluxo
    }

    const tempPass = '123456'; // ou gere uma senha aleatória
    console.log({ tempPass });
    const cred = await createUserWithEmailAndPassword(auth, email, tempPass);
    console.log({ cred });


    if (name) {
      await updateProfile(cred.user, { displayName: name });
    }

    // >>>>>>>>>>>>>>> ADIÇÃO: criar/atualizar doc em 'users'
    {
      const { getFirestore, doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const db = fbInit ? getFirestore(fbInit) : getFirestore();

      const uid = cred.user.uid;
      const dataToSet = {
        docId: uid,
        createdAt: serverTimestamp(),
        userName: name,
        userEmail: email,
        partnerActivity,
        typeAccount: "partner",
      };

      await setDoc(doc(db, 'users', uid), dataToSet, { merge: true });
      console.log('users doc criado/atualizado:', { uid, dataToSet });
    }
    // <<<<<<<<<<<<<<< FIM DA ADIÇÃO

    // (opcional) enviar verificação
    await sendEmailVerification(cred.user);
    await sendPasswordResetEmail(auth, email);

    tools.setData({ path: 'sc.A12.forms.showErr', value: false });
    tools.setData({ path: 'sc.A12.forms.showSuccess', value: true });
    tools.setData({ path: 'sc.A12.forms.msgs.msg1', value: 'Usuário criado com sucesso' });

    // const delay = () => {
    //   tools.setData({ path: 'all.toggles.sideRight', value: false });
    //   tools.setData({ path: 'all.toggles.a12.add', value: false });
    // }

    // sucesso...
  } catch (e: any) {
    // trate erros (email-already-in-use, invalid-email, weak-password, etc.)
    tools.setData({ path: 'sc.A12.forms.showErr', value: true });
    tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Erro ao Criar Parceiro. ' + e.message });
  }
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a12.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a10.addFinance", "==", true ]

]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `FINANCEIRO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Quantidade de Parcelas`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installments`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installments`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Valor`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installmentValue`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installmentValue`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installmentDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installmentDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a10.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a10.addFinance`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a10.addFinance`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`mockCondos`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.list`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a11list",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{
	backgroundColor: "$var_all.colors.primary",
	paddingHorizontal: 35,
	height: 70,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 98,
	height: 59,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/planteUmaCasa%2Fplante%20uma%20casa%20logo.png?alt=media&token=2badfafe-64e9-4e4b-a62c-c1a30fb91f58`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 30,
	height: 30,
	borderRadius: 200
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ 
	color: 'white',
 }`
          ],

          children: [
            `Admin`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ width: "100%", height: "100%" }`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 200,
	height: "100%",
	backgroundColor: "white"
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.profile`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Meu Perfil`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Condomínios`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [undefined]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Sair`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
	height: "100%",
	backgroundColor: '#f5f5f5',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: '100%',
	height: 100,
	backgroundColor: '#a6a6a6',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingHorizontal: 45,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 7,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="m11.438 19.25-6.75-6.75 6.75-6.75M5.625 12.5h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4375 19.25L4.6875 12.5L11.4375 5.75M5.625 12.5H19.3125" stroke="#F5F5F5" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 26,
	fontWeight: '700',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Parceiros`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '400',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Lista dos Parceiros`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	height: 30,
	backgroundColor: 'transparent',
	paddingHorizontal: 30,
	paddingVertical: 8,
	borderWidth: 2,
	borderRadius: 20,
	borderColor: 'white',
	justifyContent: 'center',
	alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '700',
	color: 'white',
}`
          ],

          children: [
            `Label`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	paddingHorizontal: 60,
	paddingVertical: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
	paddingVertical: 10,
	paddingHorizontal: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Nome`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Área de Atuação`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            ``
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 15,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{
borderRadius: 12,
}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a11.list`,

          itemElements: [
            
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',
backgroundColor: 'white',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 12,
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.1,
shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
	flexDirection: 'row',
	alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_name`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_email`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_field`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            ``
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 25,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        
          ],

      styles:[`{
width: '100%',
}`],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 300,
	height: "100%",
	position: 'absolute',
	right: 0,
	top: -70,
	zIndex: 1,
	alignItems: 'center',
	backgroundColor: 'transparent',
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.sideRight", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 6,
	paddingHorizontal: 18,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 18,
	borderWidth: 1,
	borderColor: '#f5f5f5',
	borderRadius: 20,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 20,
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Ex: Residência dos Silvas",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Rua das Flores, 123',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.iptChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
multiline: 'true',
}`],

          stylesArray: [`{
borderWidth: 1,
borderColor: '#ccc',
padding: 5,
height: 80,
borderRadius: 10,
}`],

          path: [`sc.a1.iptChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a1.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.profile", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.profile`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `PERFIL DO ADMINISTRADOR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
height: '100%',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{	
	backgroundColor: 'white',
	paddingHorizontal: 35,
	paddingVertical: 8,
	borderRadius: 22,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#777777',
fontSize: 12,
fontWeight: '700',
}`
          ],

          children: [
            `$var_all.authUser.email`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.editCondo", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 6,
	paddingHorizontal: 18,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 18,
	borderWidth: 1,
	borderColor: '#f5f5f5',
	borderRadius: 20,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 20,
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Ex: Residência dos Silvas",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Rua das Flores, 123',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'DD/MM/AAAA',
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.a1.editChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
multiline: 'true',
}`],

          stylesArray: [`{
borderWidth: 1,
borderColor: '#ccc',
padding: 5,
height: 80,
borderRadius: 10,
}`],

          path: [`sc.a1.editChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `mockCondos`, `$var_sc.a1.editChanges.docId`],
            arrPathData: [`sc.a1.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a7.editOwner", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `CADASTRO LOTE / PROPRIETÁRIO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 14,
	paddingHorizontal: 18,
	width: '100%',
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome do Proprietário`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerMail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerMail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Obra`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Área`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Valor total da obra`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Valor total da entrada`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a7.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a12.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
	paddingVertical: 4,
	paddingHorizontal: 10,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="red"
    viewBox="0 0 18 16"
    {...props}
  >
    <Path
      stroke="#315E2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.438 14.75 1.688 8l6.75-6.75M2.625 8h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4375 14.75L1.6875 8L8.4375 1.25M2.625 8H16.3125" stroke="#315E2D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "16px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 10,
fontWeight: '300',
color: '#CCCCCC',
}`
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
color: '#555555',
}`
          ],

          children: [
            `CADASTRO PARCEIRO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#f5f5f5',
padding: 12,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingVertical: 14,
	paddingHorizontal: 18,
	width: '100%',
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Nome`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptsChanges.partnerMail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptsChanges.partnerMail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 15, height: 15, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
color: '#555555',
fontWeight: '700',
}`
          ],

          children: [
            `Área de Atuação`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: "Escreva...",
}`],

          stylesArray: [`{
borderBottomWidth: 1,
borderBottomColor: '#ccc',
paddingVertical: 2,
paddingHorizontal: 4,
}`],

          path: [`sc.A12.forms.iptChanges.partnerActivity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A12.forms.iptChanges.partnerActivity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 5, marginTop: 10, textAlign: "center" }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "red" }`
          ],

          children: [
            `$var_sc.A12.msgs.msg1`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
backgroundColor: "#315E2D", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async () => {
  try {
    const pathName = 'sc.A12.forms.iptsChanges.partnerName';
    const pathEmail = 'sc.A12.forms.iptsChanges.partnerMail';
    const pathPartner = 'sc.A12.forms.iptsChanges.partnerActivity';

    const name = (tools.getCtData(pathName) ?? '').trim();
    const email = (tools.getCtData(pathEmail) ?? '').trim();
    const partnerActivity = (tools.getCtData(pathPartner) ?? '').trim();
    console.log({ name, email });

    const validateEmail = (v: string) => v.includes('@') && v.includes('.');
    console.log({ validateEmail: validateEmail(email) });

    if (name === "") {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Preencha o Nome.' });
      return;
    }
    if (email === "") {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Preencha o Email.' });
      return;
    }

    if (!validateEmail(email)) {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Email inválido.' });
      return;
    }

    // Auth
    const { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, fetchSignInMethodsForEmail } =
      await import('firebase/auth');

    const fbInit = tools.getCtData('all.temp.fireInit');
    console.log({ fbInit });
    const auth = fbInit ? getAuth(fbInit) : getAuth();

    // ---- Pré-checagem opcional: já existe?
    const methods = await fetchSignInMethodsForEmail(auth, email);
console.log({ methods });
    if (methods.length > 0) {
      tools.setData({ path: 'sc.A12.forms.showErr', value: true });
      tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Esse usuário já foi criado anteriormente' });
      return; // quebra o fluxo
    }

    const tempPass = '123456'; // ou gere uma senha aleatória
    console.log({ tempPass });
    const cred = await createUserWithEmailAndPassword(auth, email, tempPass);
    console.log({ cred });


    if (name) {
      await updateProfile(cred.user, { displayName: name });
    }

    // >>>>>>>>>>>>>>> ADIÇÃO: criar/atualizar doc em 'users'
    {
      const { getFirestore, doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const db = fbInit ? getFirestore(fbInit) : getFirestore();

      const uid = cred.user.uid;
      const dataToSet = {
        docId: uid,
        createdAt: serverTimestamp(),
        userName: name,
        userEmail: email,
        partnerActivity,
        typeAccount: "partner",
      };

      await setDoc(doc(db, 'users', uid), dataToSet, { merge: true });
      console.log('users doc criado/atualizado:', { uid, dataToSet });
    }
    // <<<<<<<<<<<<<<< FIM DA ADIÇÃO

    // (opcional) enviar verificação
    await sendEmailVerification(cred.user);
    await sendPasswordResetEmail(auth, email);

    tools.setData({ path: 'sc.A12.forms.showErr', value: false });
    tools.setData({ path: 'sc.A12.forms.showSuccess', value: true });
    tools.setData({ path: 'sc.A12.forms.msgs.msg1', value: 'Usuário criado com sucesso' });

    // const delay = () => {
    //   tools.setData({ path: 'all.toggles.sideRight', value: false });
    //   tools.setData({ path: 'all.toggles.a12.add', value: false });
    // }

    // sucesso...
  } catch (e: any) {
    // trate erros (email-already-in-use, invalid-email, weak-password, etc.)
    tools.setData({ path: 'sc.A12.forms.showErr', value: true });
    tools.setData({ path: 'sc.A12.msgs.msg1', value: 'Erro ao Criar Parceiro. ' + e.message });
  }
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#FFFFFF',
fontWeight: '700',
}`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: "transparent", 
borderRadius: 20, 
alignItems: "center", 
justifyContent: "center",
paddingHorizontal: 30,
paddingVertical: 8,
borderWidth: 2,
borderColor: '#315E2D',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a12.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a12.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 15,
color: '#315E2D',
fontWeight: '700',
}`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 40, height: 40, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a10.addFinance", "==", true ]

]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `FINANCEIRO`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Quantidade de Parcelas`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installments`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installments`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Valor`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installmentValue`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installmentValue`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a10.iptChanges.installmentDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges.installmentDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a10.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a10.addFinance`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a10.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a10.addFinance`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`partners`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a11.list`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"b4list",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{
	backgroundColor: "$var_all.colors.primary",
	paddingHorizontal: 35,
	height: 70,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 98,
	height: 59,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/planteUmaCasa%2Fplante%20uma%20casa%20logo.png?alt=media&token=2badfafe-64e9-4e4b-a62c-c1a30fb91f58`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 30,
	height: 30,
	borderRadius: 200
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ 
	color: 'white',
 }`
          ],

          children: [
            `Admin`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ width: "100%", height: "100%" }`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 200,
	height: "100%",
	backgroundColor: "white"
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3.profile`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Meu Perfil`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Condomínios`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [undefined]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Sair`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", height: "100%" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: '100%',
	height: 100,
	backgroundColor: '#a6a6a6',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingHorizontal: 45,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 26,
	fontWeight: '700',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Condomínios`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '400',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Lista de Condomínios`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	height: 30,
	backgroundColor: 'transparent',
	paddingHorizontal: 30,
	paddingVertical: 8,
	borderWidth: 2,
	borderRadius: 20,
	borderColor: 'white',
	justifyContent: 'center',
	alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a10.addFinance`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '700',
	color: 'white',
}`
          ],

          children: [
            `CRIAR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.b4.list`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '80px',
flexDirection: 'row',
paddingHorizontal: '10px',
backgroundColor: 'transparent',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b5.viewCondo`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b5.editChanges`],
          value: [`$arg_item`]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$arg_condo`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$arg_address`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 200,
	backgroundColor: 'white',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b6list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Lotes - Proprietário`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[`{
width: '100%',
}`],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{
	width: 300,
	height: "100%",
	position: 'absolute',
	right: 0,
	top: -50,
	zIndex: 1,
	alignItems: 'center',
}`, `{ backgroundColor: "$var_all.colors.smoke" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.sideRight", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b3.profile", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3.profile`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="m11.438 19.25-6.75-6.75 6.75-6.75M5.625 12.5h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4375 19.25L4.6875 12.5L11.4375 5.75M5.625 12.5H19.3125" stroke="#F5F5F5" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [``],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `PERFIL DO ADMINISTRADOR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_all.authUser.email`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '200px',
	height:'200px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a1.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b5.viewCondo", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '200px',
	height:'200px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:[`sc.b5.editChanges.image`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.condo`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.address`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.startDate`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.endDate`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.description`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.editCondo", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '200px',
	height:'200px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `mockCondos`, `$var_sc.a1.editChanges.docId`],
            arrPathData: [`sc.a1.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b8.addSteps", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `ADICIONAR ETAPA`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `1. Planejamento e Projeto`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Sub. Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Definição do Orçamento`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.date`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.date`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Responsável`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.responsible`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.responsible`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição detalhada`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`steps`],
            arrPathData: [`sc.b8.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b9.editSteps", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `ADICIONAR ETAPA`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `1. Planejamento e Projeto`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Sub. Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Definição do Orçamento`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.date`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.date`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Responsável`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.responsible`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.responsible`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição detalhada`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`steps`],
            arrPathData: [`sc.b8.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`condos`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b4.list`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"b6list",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{
	backgroundColor: "$var_all.colors.primary",
	paddingHorizontal: 35,
	height: 70,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 98,
	height: 59,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/planteUmaCasa%2Fplante%20uma%20casa%20logo.png?alt=media&token=2badfafe-64e9-4e4b-a62c-c1a30fb91f58`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 30,
	height: 30,
	borderRadius: 200
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ 
	color: 'white',
 }`
          ],

          children: [
            `Admin`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ width: "100%", height: "100%" }`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 200,
	height: "100%",
	backgroundColor: "white"
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3.profile`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Meu Perfil`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Condomínios`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [undefined]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Sair`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
	height: "100%",
	backgroundColor: '#f5f5f5',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: '100%',
	height: 100,
	backgroundColor: '#a6a6a6',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingHorizontal: 45,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 7,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="m11.438 19.25-6.75-6.75 6.75-6.75M5.625 12.5h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4375 19.25L4.6875 12.5L11.4375 5.75M5.625 12.5H19.3125" stroke="#F5F5F5" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 26,
	fontWeight: '700',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Lotes - Proprietário`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '400',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Lista dos proprietários`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	height: 30,
	backgroundColor: 'transparent',
	paddingHorizontal: 30,
	paddingVertical: 8,
	borderWidth: 2,
	borderRadius: 20,
	borderColor: 'white',
	justifyContent: 'center',
	alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '700',
	color: 'white',
}`
          ],

          children: [
            `CRIAR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	paddingHorizontal: 60,
	paddingVertical: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
	paddingVertical: 10,
	paddingHorizontal: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Proprietário`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Lote`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `Área`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            ``
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 15,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{
borderRadius: 12,
}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.b6.list`,

          itemElements: [
            
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',
backgroundColor: 'white',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 12,
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.1,
shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
	flexDirection: 'row',
	alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_owner`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_email`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_lot`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
	color: '#555555',
}`
          ],

          children: [
            `$arg_area`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "fit-content", 
	minWidth: 120, 
	height: 30, 
	backgroundColor: "#fff",
	borderRadius: 20, 
	alignItems: "center",
	justifyContent: "center",
	borderWidth: 2,
	borderColor: "#315e2d",
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b7list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ color: "#FFF" }`, `{
	color: "#315e2d",
	fontSize: 12,
	fontWeight: 'bold', 
}`
          ],

          children: [
            `Adicionar Etapa`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 25,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        
          ],

      styles:[`{
width: '100%',
}`],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{
	width: 300,
	height: "100%",
	position: 'absolute',
	right: 0,
	top: -50,
	zIndex: 1,
	alignItems: 'center',
}`, `{ backgroundColor: "$var_all.colors.smoke" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.sideRight", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b3.profile", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3.profile`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="m11.438 19.25-6.75-6.75 6.75-6.75M5.625 12.5h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4375 19.25L4.6875 12.5L11.4375 5.75M5.625 12.5H19.3125" stroke="#F5F5F5" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [``],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `PERFIL DO ADMINISTRADOR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_all.authUser.email`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '200px',
	height:'200px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a1.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b5.viewCondo", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '200px',
	height:'200px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:[`sc.b5.editChanges.image`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.condo`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.address`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.startDate`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.endDate`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.description`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.editCondo", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '200px',
	height:'200px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `mockCondos`, `$var_sc.a1.editChanges.docId`],
            arrPathData: [`sc.a1.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b8.addSteps", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `ADICIONAR ETAPA`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `1. Planejamento e Projeto`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Sub. Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Definição do Orçamento`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.date`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.date`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Responsável`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.responsible`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.responsible`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição detalhada`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`steps`],
            arrPathData: [`sc.b8.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b9.editSteps", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `ADICIONAR ETAPA`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `1. Planejamento e Projeto`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Sub. Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Definição do Orçamento`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.date`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.date`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Responsável`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.responsible`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.responsible`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição detalhada`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`steps`],
            arrPathData: [`sc.b8.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`lots`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b6.list`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"b7list",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{
	backgroundColor: "$var_all.colors.primary",
	paddingHorizontal: 35,
	height: 70,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 98,
	height: 59,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/planteUmaCasa%2Fplante%20uma%20casa%20logo.png?alt=media&token=2badfafe-64e9-4e4b-a62c-c1a30fb91f58`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 30,
	height: 30,
	borderRadius: 200
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ 
	color: 'white',
 }`
          ],

          children: [
            `Admin`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ width: "100%", height: "100%" }`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 200,
	height: "100%",
	backgroundColor: "white"
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3.profile`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Meu Perfil`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Condomínios`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [undefined]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Sair`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flex: 1,
	height: "100%",
	backgroundColor: '#f5f5f5',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: '100%',
	height: 100,
	backgroundColor: '#a6a6a6',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingHorizontal: 45,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 4 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 7,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a4list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="m11.438 19.25-6.75-6.75 6.75-6.75M5.625 12.5h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4375 19.25L4.6875 12.5L11.4375 5.75M5.625 12.5H19.3125" stroke="#F5F5F5" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 26,
	fontWeight: '700',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Lotes - Proprietário`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '400',
	color: '#FFFFFF',
}`
          ],

          children: [
            `Lista dos proprietários`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	height: 30,
	backgroundColor: 'transparent',
	paddingHorizontal: 30,
	paddingVertical: 8,
	borderWidth: 2,
	borderRadius: 20,
	borderColor: 'white',
	justifyContent: 'center',
	alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a7.editOwner`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 15,
	fontWeight: '700',
	color: 'white',
}`
          ],

          children: [
            `CRIAR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	paddingHorizontal: 60,
	paddingVertical: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 15,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{
borderRadius: 12,
}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.Accordion pass={{
 configs: [`{ 
	defaultOpenIdx: 0,
	styles: {
			backgroundColor: '#ccc',
			width: "100%",
			borderRadius: 10,
			marginBottom: 14
	}
}`], arrElements: [
 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between"
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Planejamento e Projeto`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between"
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Definição do Orçamento`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between"
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Escolha do Terreno`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between"
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Contratação de arquiteto/engenheiro`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between"
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Elaboração do projeto arquitetônico e complementares (estrutural, elétrico, hidráulico)`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between"
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	paddingVertical: 5,
	paddingHorizontal: 10,
}`
          ],

          children: [
            `Preparo do Terreno`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ padding: 20 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between"
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `1`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between"
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `2`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between"
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `3`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between"
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `4`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ], args 
 }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{
	width: 300,
	height: "100%",
	position: 'absolute',
	right: 0,
	top: -50,
	zIndex: 1,
	alignItems: 'center',
}`, `{ backgroundColor: "$var_all.colors.smoke" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.sideRight", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b3.profile", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3.profile`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="m11.438 19.25-6.75-6.75 6.75-6.75M5.625 12.5h13.688"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4375 19.25L4.6875 12.5L11.4375 5.75M5.625 12.5H19.3125" stroke="#F5F5F5" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [``],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `PERFIL DO ADMINISTRADOR`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_all.authUser.email`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.add", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '200px',
	height:'200px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`mockCondos`],
            arrPathData: [`sc.a1.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.add`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b5.viewCondo", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '200px',
	height:'200px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:[`sc.b5.editChanges.image`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.condo`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.address`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.startDate`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.endDate`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$var_sc.b5.editChanges.description`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a1.editCondo", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `Condomínio`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '200px',
	height:'200px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome do Condomínio`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.condo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.condo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Início`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.startDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.startDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data de Conclusão Prevista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.editChanges.endDate`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges.endDate`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.a1.iptChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `mockCondos`, `$var_sc.a1.editChanges.docId`],
            arrPathData: [`sc.a1.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a1.editCondo`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b8.addSteps", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `ADICIONAR ETAPA`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `1. Planejamento e Projeto`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Sub. Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Definição do Orçamento`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.date`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.date`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Responsável`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.responsible`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.responsible`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição detalhada`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`steps`],
            arrPathData: [`sc.b8.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b9.editSteps", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
}`
          ],

          children: [
            `ADICIONAR ETAPA`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `1. Planejamento e Projeto`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Sub. Etapa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Definição do Orçamento`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.date`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.date`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Responsável`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.responsible`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.responsible`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Descrição detalhada`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.b8.editChanges.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [(images) => {console.log({images});}], args,
 }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Carregar Imagem`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`steps`],
            arrPathData: [`sc.b8.editChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b8.editChanges`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b8.addSteps`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"c1login",

          styles:[
        `{ alignItems: "center", justifyContent: "center" }`, 
        `{ width: "100%", height: "100%" }`, `{ backgroundColor: "$var_all.colors.primary" }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "80%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("c2register");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Entrar c/ Google`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"c2register",

          styles:[
        `{ backgroundColor: "$var_all.colors.smoke" }`, 
        `{ width: "100%", height: "100%" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{
	backgroundColor: "$var_all.colors.primary",
	paddingHorizontal: 35,
	height: 70,
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 98,
	height: 59,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/planteUmaCasa%2Fplante%20uma%20casa%20logo.png?alt=media&token=2badfafe-64e9-4e4b-a62c-c1a30fb91f58`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ padding: 20 }`],
            arrProps: [],
            arrItems: [
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
              {
                height: "50px",
                width: "80px",
                backgroundColor: "#FDFDFD",
                borderWidth: 2,
                borderColor: "#EEE"
              }
              ],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `pauloantonio@gmail.com`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome Completo`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.C2.iptsChanges.fullName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.C2.iptsChanges.fullName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `RG`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.C2.iptsChanges.rg`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.C2.iptsChanges.rg`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Telefone`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.C2.iptsChanges.phone`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.C2.iptsChanges.phone`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Endereço`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [`sc.C2.iptsChanges.address`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.C2.iptsChanges.address`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flexDirection: "row", }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", padding: 5, backgroundColor: "#FFF", flexDirection: "row", alignItems: "center"}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const path = "all.toggles.checkboxMasculino";
  const currState = tools.getCtData(path);
  tools.functions.setVar({
		args: '',
		pass: { keyPath: [path], value: [!currState] },
	});
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "$var_all.colors.secondary", borderRadius: 4, marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkboxMasculino", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    {...props}
  >
    <Path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.17}
      d="M33.333 10 15 28.333 6.667 20"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, backgroundColor: "#FFF", borderRadius: 4, borderWidth: 2, borderColor: "#CCC", marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkboxMasculino", "==", false ]]
 , trigger: 'on listen'
}})],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Masculino`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", padding: 5, backgroundColor: "#FFF", flexDirection: "row", alignItems: "center"}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const path = "all.toggles.checkboxFeminino";
  const currState = tools.getCtData(path);
  tools.functions.setVar({
		args: '',
		pass: { keyPath: [path], value: [!currState] },
	});
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "$var_all.colors.secondary", borderRadius: 4, marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkboxFeminino", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    {...props}
  >
    <Path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.17}
      d="M33.333 10 15 28.333 6.667 20"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, backgroundColor: "#FFF", borderRadius: 4, borderWidth: 2, borderColor: "#CCC", marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkboxFeminino", "==", false ]]
 , trigger: 'on listen'
}})],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Feminino`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 130,
	height: 36,
	borderRadius: 10,
	paddingHorizontal: 30,
	paddingVertical: 8,
	backgroundColor: '#315E2D',
	alignItems: 'center',
	justifyContent: 'center',
	shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 20,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("c5steps");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	color: "#FFF",
	fontSize: 15,
	fontWeight: '500',
}`
          ],

          children: [
            `Avançar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],
            args,
        }}/>],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"c2list",

          styles:[
        `{ backgroundColor: "$var_all.colors.smoke" }`, 
        `{ width: "100%", height: "100%" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "$var_all.colors.primary",
	alignItems: "center",
}

`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
	color: "#FFF"
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Funcs. Firebase Revisadas:
fbInit - OK
getDocs - OK
getDoc - OK
deleteDoc - OK
updateDoc
fireUpload
where
whereConds ??`
          ],

          args,

        }}/>, (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `all.lists.lst3`,

          itemElements: [
            (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	padding: 20
}`
          ],

          children: [
            `$arg_name`
          ],

          args,

        }}/>
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"c5steps",

          styles:[
        `{ backgroundColor: "$var_all.colors.smoke" }`, 
        `{ width: "100%", height: "100%" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
		flexDirection: "row",
		width: "100%",
		height: "100%",
		backgroundColor: "transparent",
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 1000,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.c3Menu", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: "60%",
	height: "100%",
	backgroundColor: "white"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.c3Menu", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.c3Menu`],
          value: [false]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("c5steps");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Meu Perfil`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.c3Menu`],
          value: [false]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("c5steps");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Etapas`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3.profile`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Financeiro`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [undefined]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [undefined]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14 4.5a9.5 9.5 0 0 0-6.598 16.335c.367-.875 1.123-1.572 1.977-2.06 1.232-.704 2.868-1.108 4.621-1.108 1.753 0 3.389.403 4.62 1.108.855.488 1.61 1.185 1.978 2.06A9.5 9.5 0 0 0 14 4.5Zm4.819 17.689.002-.007a.685.685 0 0 0 .012-.182c0-.407-.297-.97-1.204-1.489-.88-.502-2.16-.844-3.629-.844-1.469 0-2.75.342-3.629.844-.907.519-1.204 1.082-1.204 1.489a.686.686 0 0 0 .014.189A9.455 9.455 0 0 0 14 23.5a9.456 9.456 0 0 0 4.819-1.311ZM2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14ZM14 9.167a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 2.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
      clipRule="evenodd"
    />
  </Svg>

)
      },

      svgOriginal: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 16.6838 5.61287 19.1076 7.40232 20.8353C7.76942 19.9596 8.52496 19.2628 9.37907 18.7747C10.6115 18.0705 12.2474 17.6667 14 17.6667C15.7526 17.6667 17.3885 18.0705 18.6209 18.7747C19.475 19.2628 20.2306 19.9596 20.5977 20.8353C22.3871 19.1076 23.5 16.6838 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM18.8186 22.189C18.8192 22.1872 18.82 22.185 18.8207 22.1824C18.8293 22.1528 18.8333 22.1143 18.8333 22C18.8333 21.5933 18.5357 21.0296 17.6287 20.5112C16.7499 20.009 15.469 19.6667 14 19.6667C12.531 19.6667 11.2502 20.009 10.3713 20.5112C9.46426 21.0296 9.16667 21.5933 9.16667 22C9.16667 22.1143 9.17069 22.1528 9.17926 22.1824C9.18004 22.185 9.18076 22.1872 9.18141 22.189C10.5941 23.0221 12.2412 23.5 14 23.5C15.7588 23.5 17.4059 23.0221 18.8186 22.189ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14ZM14 9.16667C12.6193 9.16667 11.5 10.286 11.5 11.6667C11.5 13.0474 12.6193 14.1667 14 14.1667C15.3807 14.1667 16.5 13.0474 16.5 11.6667C16.5 10.286 15.3807 9.16667 14 9.16667ZM9.5 11.6667C9.5 9.18139 11.5147 7.16667 14 7.16667C16.4853 7.16667 18.5 9.18139 18.5 11.6667C18.5 14.1519 16.4853 16.1667 14 16.1667C11.5147 16.1667 9.5 14.1519 9.5 11.6667Z" fill="#0F1729"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: '$var_all.texts.sizes.small',
}`
          ],

          children: [
            `Sair`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
		backgroundColor: "transparent",
		flex: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.c3Menu`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `AAAA`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "$var_all.colors.primary",
	alignItems: "center",
}

`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.c3Menu`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg     xmlns="http://www.w3.org/2000/svg"
width={14}     height={12}     fill="red"     viewBox="0 0 14 12"     {...props}   >
<Path       stroke="#FFF"       strokeLinecap="round"       strokeLinejoin="round"       d="M13.5 1H.5m13 5H.5m13 5H.5"     />   </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
	color: "#FFF"
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{
	width: "100%",
	height: "100%",
	alignItems: 'center',
}`, `{ backgroundColor: "$var_all.colors.smoke" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	maxWidth: 300,
	minHeight: 80,
	backgroundColor: "#FFF",
	padding: 10,
	flexDirection: 'row',
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '60px',
	height:'60px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	padding: 10,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Alphaville PE1`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Lote AC 19, Área 450m²`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Etapas principais da obra de uma casa na planta`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10,
	flexDirection: 'row',
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M8.293 5.293a1 1 0 0 1 1.414 0l5.823 5.823a1.25 1.25 0 0 1 0 1.768l-5.823 5.823a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.5303 11.1161C16.0185 11.6043 16.0185 12.3957 15.5303 12.8839L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z" fill="#0F1729"/>
</svg>

      `,

      altura: "10px",

      largura: "10px",

      preenchimento: ['black'],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `1. Planejamento e Projeto`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [
        `locations`, 
        `$var_sc.B1.currId`, `localBikes`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.lists.lst3`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a0login_old",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ alignItems: "center", justifyContent: "center" }`, `{ backgroundColor: "$var_all.colors.smoke" }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "80%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 80,
	height: 30
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{ 
	padding: 8,
	paddingLeft: 2,
	borderBottomColor: "$var_all.colors.primary",
	borderBottomWidth: 2,
	marginBottom: 16,
	textAlign: "left"
}`],

          path: [`sc.A0.forms.iptsChanges.userEmail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{ 
	padding: 8,
	paddingLeft: 2,
	borderBottomColor: "$var_all.colors.primary",
	borderBottomWidth: 2,
	marginBottom: 16,
	textAlign: "left"
}`],

          path: [`sc.A0.forms.iptsChanges.userPassword`],

          funcsArray: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [`$arg_callback`]
        }}), (txt) => {
	const x = '';
	console.log({txt});
	tools.setData({path: "sc.A0.forms.iptsChanges.pass2", value: txt });
}],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "sc.A0.forms.showErr", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: "red"
}`
          ],

          children: [
            `$var_sc.A0.forms.msgs.msg1`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
	keyboardType: 'phone-pad',
	maxLength: 20
}`],

          stylesArray: [`{ 
	padding: 8,
	paddingLeft: 2,
	borderBottomColor: "$var_all.colors.primary",
	borderBottomWidth: 2,
	marginBottom: 16,
	textAlign: "left"
}`],

          path: [`sc.A0.forms.iptsChanges.pass`],

          funcsArray: [(txt) => {
const digits = String(txt).replace(/[^0-9]/g, '').slice(0, 11);
  const ddd = digits.slice(0, 2);
  const isCel = digits.length > 10;
  const first = digits.slice(2, isCel ? 7 : 6);
  const last  = digits.slice(isCel ? 7 : 6, isCel ? 11 : 10);

  const mask =
    (ddd ? '(' + ddd + ') ' : '') +
    (first ? first : '') +
    (last ? ' - ' + last : '');

  console.log({ mask });
	tools.setData({path: "sc.A0.forms.iptsChanges.pass", value: mask });
}],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
 functions.firebase.where({ args, pass:{

  arrRefStrings: [`users`],
 arrWhere: [
 (...args) =>
        functions.firebase.whereConds({ args, pass:{
          arrStrings: [
        `userEmail`, 
        `==`, `$var_sc.A0.forms.iptsChanges.userEmail`],
        }}), (...args) =>
        functions.firebase.whereConds({ args, pass:{
          arrStrings: [
        `userPassword`, 
        `==`, `$var_sc.A0.forms.iptsChanges.userPassword`],
        }})],
 arrFuncs: [(args) => {
  console.log('minha custom login 1', args);

  const isArray = Array.isArray(args);
  const isEmpty = !isArray || args.length === 0;

	if (isEmpty) {
		
tools.setData({
      path: 'sc.A0.forms.showErr',
      value: true });

    tools.setData({
      path: 'sc.A0.forms.msgs.msg1',
      value: 'Usuário ou Senha incorretos.'});
    return;
  }

  const loginData = args[0] ?? null;

  console.log('custom 1', { loginData });

  const invalidData = !loginData || typeof loginData !== 'object';
  console.log('custom 2', { invalidData });
  if (invalidData) return;

  console.log('custom 3', { loginData });

  const typeAccount = loginData?.typeAccount;
  const isAdm = typeAccount === 'adm';

  if (isAdm) {
    tools.goTo('a1list');
  } else {
    tools.goTo('home');
  }
}],
 }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Entrar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 
        'all': { 
'firebaseConfig': {
  apiKey: "AIzaSyA_D6qWCRodaRgthOGWyLjsbqloqj-IDpA",
  authDomain: "projeto-plante-uma-casa.firebaseapp.com",
  projectId: "projeto-plante-uma-casa",
  storageBucket: "projeto-plante-uma-casa.firebasestorage.app",
  messagingSenderId: "1099098264007",
  appId: "1:1099098264007:web:5c809faec264a9400389e2",
  measurementId: "G-GZPSPJQ1WL"
}, 
'colors': { 
'primary': '#315E2D', 
'secondary': "#0064fe", 'smoke': "#ddd" } 
, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [
	{name: "Task 1", check: false},
	{name: "Task 2", check: false},
	{name: "Task 3", check: false},
	{name: "Task 4", check: false},
	{name: "Task 5", check: false},
	{name: "Task 6", check: false},
	{name: "Task 7", check: false},
	{name: "Task 8", check: false},
	{name: "Task 9", check: false},
	{name: "Task 10", check: false},
	{name: "Task 11", check: false},
	{name: "Task 12", check: false}
] } 
, 
'toggles': { 
'box1': true, 'checkbox1': false } 
, 
'texts': { 
'sizes': { 
'small': "12px", 
'medium': "14px", 'large': "16px" } 
, 'contents': {   } 
 } 
, 'authUser': {} } 
, 'sc': { 
'A0': { 'forms': { 'iptsChanges': {
	userEmail: "leandrowebmaster@gmail.com",
	userPassword: "123456",
	teste: "123456"
} } 
 } 
, 
'A0B': { 'forms': { 'iptsChanges': {
	userEmail: ""
} } 
 } 
, 
'A1': { 'forms': { 'iptsChanges': {   } 
 } 
 } 
, 
'A12': { 'forms': { 'iptsChanges': {
	partnerName: "",
	partnerMail: "",
	partnerActivity: ""
} } 
 } 
, 
'B1': { 
'forms': { 'iptsChanges': {   } 
 } 
, 'currId': "HW6jpFRnQGxnZRaP4Y6M" } 
, 'B3': { 
'forms': { 'iptsChanges': {   } 
 } 
, 
'currId': "8F9zjOn7lqQK0QPpzpjj", 
'pathTest': "iptsChanges", 'statics': {
	picker1: [
		{ 
			label: 'Selecione…',
			value: '',
			disabled: true
		},
		{ 
			label: 'Opção A',
			value: 'A'
		},
		{ 
			label: 'Opção B',
			value: 'B'
		},
		{ 
			label: 'Opção C',
			value: 'C'
		},
		{ 
			label: 'Opção D',
			value: 'D'
		},
		{ 
			label: 'Opção E (desabilitada)',
			value: 'E',
			disabled: true
		},
		{ 
			label: 'Opção F',
			value: 'F'
		},
		{ 
			label: 'Opção G',
			value: 'G'
		},
		{ 
			label: 'Opção H',
			value: 'H'
		},
	]
} } 
 } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            async (...args) =>
  functions.firebase.fireInit({ args, pass:{
   fbConfig: `all.firebaseConfig`,

        }})
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
