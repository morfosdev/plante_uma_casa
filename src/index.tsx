

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
          const currRoute = 'a0login';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"designsys",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ alignItems: "center", justifyContent: "center" }`, `{ backgroundColor: "$var_all.colors.primary" }`],

          screenElements:[
        (...args:any) => <Elements.ScrollBar pass={{
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
        }}/>, 
        

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
 }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
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
        }}/>],
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
}`, 
        `{ alignItems: "center", justifyContent: "center" }`, `{ 
	padding: 0
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "100%",
	maxWidth: 280,
	minHeight: 150,
	backgroundColor: "$var_all.colors.primary",		
	alignItems: 'center',
	justifyContent: 'center',
	borderTopRadius: 20,
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 200,
	height: 80
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
    if (typeAccount === 'adm') tools.goTo('a1list');
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

            styles:[`{ width: "auto" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0csignup");
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
            styles: [`{ padding: 20 }`],
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
        , 
        (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [() => console.log({args})], args,
 }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "100%",
	minHeight: 150,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`],

            functions:[()=>{}],            childrenItems:[
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
 }}/>, (...args:any) => <Elements.IptPicker pass={{
 configs: [`{
	// -- configs
	searchable: true,
	pathItems: "sc.B3.statics.picker1",
	maxVisibleItems: 8,
	
	// -- styles
	style: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 2,
	},
	inputStyle: {
		borderWidth: 0,
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
  apiKey: "AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI",
  authDomain: "devs-tests-95208.firebaseapp.com",
  projectId: "devs-tests-95208",
  storageBucket: "devs-tests-95208.appspot.com",
  messagingSenderId: "750912250366",
		appId: "1:750912250366:web:4629eac789a718a74220af"

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
	userEmail: "adm@teste.com",
	userPassword: "123456"
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
        
