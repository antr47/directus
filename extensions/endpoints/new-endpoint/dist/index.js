'use strict';

function defineEndpoint(config) {
    return config;
}

class HomeController {
  constructor(props) {
    this.accountability = {};
    const {
      router
    } = props;
    this.contextApp = props.contextApp;
    router.post("/CUSTOM_URL", (req, res) => this.homeData(req, res));
  }
  homeData(req, res) {
    return res.end("ABC");
  }
}

var index = defineEndpoint((router, context) => {
  new HomeController({
    router,
    contextApp: context
  });
});

module.exports = index;
