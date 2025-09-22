

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
        `{ alignItems: "center", justifyContent: "center" }`, `{ backgroundColor: "$var_all.colors.primary" }`],

          screenElements:[
        

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
        (...args:any) => <Elements.ScrollBar pass={{
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
        (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `all.lists.lst3`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", padding: 5, backgroundColor: "#FFF", flexDirection: "row", alignItems: "center"}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [(args) => {
console.log({ tools, args });
console.log({ current: args[0] });

  const path = "all.lists.lst3." + args[0].index + ".check";

  const currState = args[0].item.check;
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
 arrFunctions: [(args) => [ "all.lists.lst3" + args[0].item.check, "==", true ]]
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
            `$arg_name`
          ],

          args,

        }}/>],

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
        ],
            args,
        }}/>, 
        

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
	backgroundColor: "$var_all.color.primary",
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

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
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
            { color: 'black', fontSize: 12, }
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
	width: 30,
	height: 30,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
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
 arrFunctions: [() => {
	tools.goTo("b2list")
}]
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
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a1list",

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
	backgroundColor: "white",
	paddingHorizontal: 20,
	height: 50,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	fontWeight: "bold",
	fontSize: 12
}`
          ],

          children: [
            `My Company Name`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 150,
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
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ marginLeft: 5 }`
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

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", height: "100%" }`],

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
          pathScreen:"b0login",

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
          return tools.goTo("b1home");
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
          pathScreen:"b1home",

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
 arrFunctions: [() => {
	tools.goTo("b2list")
}]
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
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `all.lists.lst3`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b3form");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ flex: 1 }`
          ],

          children: [
            `$arg_name`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [(...args) =>
        functions.firebase.deleteDocTool({ args, pass:{
   arrRefStrings: [
        `locations`, 
        `HW6jpFRnQGxnZRaP4Y6M`, 
        `localBikes`, `$arg_docId`],
   arrFuncs: [() => {}],
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
            `Apagar`
          ],

          args,

        }}/>],

            args,
          }}/>
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
          pathScreen:"b2list",

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
          pathScreen:"b3form",

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

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [
        `locations`, 
        `$var_sc.B1.currId`, `localBikes`],
            arrPathData: [`$var_sc.B3.forms.iptsChanges`],
            arrFuncs: [()=>{}],
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
 arrFunctions: [async (...args) =>
        functions.firebase.getDocTool({ args, pass:{
  arrRefStrings: [
        `locations`, `$var_sc.B1.currId`],
            arrFuncs: [()=>{}],
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
            `Pegar Doc`
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
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `users`, `$var_sc.B3.currId`],
            arrPathData: [`sc.B3.forms.iptsChanges`],
            arrFuncs: [() => {}],
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
            `Atualizar`
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
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Upload`
          ],

          args,

        }}/>],

            args,
          }}/>
        , (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [() => console.log({args})], args,
 }}/>],
            args,
        }}/>],

          functions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 
        'all': { 
'firebaseConfig': {
  apiKey: "AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI",
  authDomain: "devs-tests-95208.firebaseapp.com",
  projectId: "devs-tests-95208",
  storageBucket: "devs-tests-95208.appspot.com",
  messagingSenderId: "750912250366",
		appId: "1:750912250366:web:4629eac789a718a74220af"

}, 
'colors': { 
'primary': '#444', 
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
, 'texts': { 
'sizes': { 
'small': "12px", 
'medium': "14px", 'large': "16px" } 
, 'contents': {   } 
 } 
 } 
, 'sc': { 
'A0': { 'forms': { 'iptsChanges': {
	userEmail: "adm@teste.com",
	userPassword: "1234"
} } 
 } 
, 
'A1': { 'forms': { 'iptsChanges': {   } 
 } 
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
'currId': "8F9zjOn7lqQK0QPpzpjj", 'pathTest': "iptsChanges" } 
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
        
