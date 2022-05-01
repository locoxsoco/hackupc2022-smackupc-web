import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import QrCode from './images/qrcodelink.png';
import Logo from './images/logo216.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import '@agconnect/instance';
import '@hmscore/analytics-web';


const agConnectConfig = {
  "agcgw":{
    "backurl":"connect-dre.hispace.hicloud.com",
    "url":"connect-dre.dbankcloud.cn",
    "websocketbackurl":"connect-ws-dre.hispace.dbankcloud.com",
    "websocketurl":"connect-ws-dre.hispace.dbankcloud.cn"
  },
  "agcgw_all":{
    "CN":"connect-drcn.dbankcloud.cn",
    "CN_back":"connect-drcn.hispace.hicloud.com",
    "DE":"connect-dre.dbankcloud.cn",
    "DE_back":"connect-dre.hispace.hicloud.com",
    "RU":"connect-drru.hispace.dbankcloud.ru",
    "RU_back":"connect-drru.hispace.dbankcloud.ru",
    "SG":"connect-dra.dbankcloud.cn",
    "SG_back":"connect-dra.hispace.hicloud.com"
  },
  "client":{
    "cp_id":"5190034000027783380",
    "product_id":"99536292102232937",
    "client_id":"881169110107440000",
    "client_secret":"6CD2E82F5FCE7B8D08B618864E4D153972A0A0C099254215CA8C0205066CDB89",
    "project_id":"99536292102232937",
    "app_id":"106097761",
    "api_key":"DAEDAGQR1+nETP3/PBRylNgwJS2eVHfMhEpXCQs30Yn374FAgPO1C0BDoeW0VjRZ9DUh8KitvGCLUB/Po0dyrCQYrD1wnzAZ56M6Ag==",
    "package_name":"com.hsd.upc.hack.smackupc"
  },
  "oauth_client":{
    "client_id":"106097761",
    "client_type":19
  },
  "app_info":{
    "app_id":"106097761",
    "package_name":"com.hsd.upc.hack.smackupc"
  },
  "service":{
    "analytics":{
      "collector_url":"datacollector-dre.dt.hicloud.com,datacollector-dre.dt.dbankcloud.cn",
      "collector_url_ru":"datacollector-drru.dt.dbankcloud.ru,datacollector-drru.dt.hicloud.com",
      "collector_url_sg":"datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn",
      "collector_url_de":"datacollector-dre.dt.hicloud.com,datacollector-dre.dt.dbankcloud.cn",
      "collector_url_cn":"datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn",
      "resource_id":"p1",
      "channel_id":""
    },
    "search":{
      "url":"https://search-dre.cloud.huawei.com"
    },
    "cloudstorage":{
      "storage_url":"https://ops-dre.agcstorage.link"
    },
    "ml":{
      "mlservice_url":"ml-api-dre.ai.dbankcloud.com,ml-api-dre.ai.dbankcloud.cn"
    }
  },
  "region":"DE",
  "configuration_version":"3.0"
};

const unityContext = new UnityContext({
  loaderUrl: "./build/juego prueba 6 cambios.loader.js",
  dataUrl: "./build/juego prueba 6 cambios.data.unityweb",
  frameworkUrl: "./build/juego prueba 6 cambios.framework.js.unityweb",
  codeUrl: "./build/juego prueba 6 cambios.wasm.unityweb",
});

function App() {
  let analytics;
  const { height, width } = useWindowDimensions();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(function () {
    unityContext.on("loaded", function () {
      setIsLoaded(true);
    });
  }, []);

  function handleOnClickFullscreen() {
    unityContext.setFullscreen(true);
  };
  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  };

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Made with ♥ at HackUPC 2022.'}
      </Typography>
    );
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <div></div>;
    }
    return <div>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Loading...
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Takes some time to render a mobile game made in 2 days...
        </Typography>
      </Container>
    </div>;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <img src={Logo} alt="Logo" style={{align: "center"}} width="32" height="32" />
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, ml: 1 }}>
            SmackUPC
          </Typography>
          <Button onClick={handleOnClickFullscreen} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Go Fullscreen
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero unit */}
      <Greeting isLoggedIn={isLoaded}/>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Unity
          unityContext={unityContext}
          style={{ width: width*0.9, height: 0.5625*width, visibility: isLoaded ? "visible" : "hidden" }} />
      </Grid>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        Try it out!
      </Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <img src={QrCode} alt="QrCode" style={{align: "center"}} />
      </Grid>
      {/* End hero unit */}
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 3,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 0 }} />
      </Container>
      {/* End footer */}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
