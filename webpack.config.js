// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
// const share = mf.share;

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, 'tsconfig.json'),
//   [/* mapped paths to share */]);

// module.exports = {
//   output: {
//     publicPath: `http://localhost:${process.env.PORT}`,
//     uniqueName: "kycHub",
//     publicPath: "auto"
//   },
//   optimization: {
//     runtimeChunk: false
//   },   
//   resolve: {
//     alias: {
//       ...sharedMappings.getAliases(),
//     }
//   },
//   experiments: {
//     outputModule: true
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//         library: { type: "module" },

//         // For remotes (please adjust)
//         // name: "kycHub",
//         // filename: "remoteEntry.js",
//         // exposes: {
//         //     './Component': './/src/app/app.component.ts',
//         // },        
        
//         //For hosts (please adjust)
//         remotes: {
//             "kyc": "http://localhost:4201/remoteEntry.js",
//         },

//         shared: share({
//           "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
//           "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
//           "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
//           "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

//           ...sharedMappings.getDescriptors()
//         })
        
//     }),
//     sharedMappings.getPlugin()
//   ],
// };
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});