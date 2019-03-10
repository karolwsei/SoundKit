const path = require(`path`);
const HWP = require(`html-webpack-plugin`);
module.exports = {
   entry: path.join(__dirname, `/src/index.js`),
   output: {
        filename: `build.js`,
        path: path.join(__dirname, `/dist`)},
   module:{
        rules:[{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: `babel-loader`
        },
        { 
            test: /\.css$/,
            use: ['style-loader', 'css-loader']},
        {
            test: /\.wav$/,
            use: `file-loader`
        }]},
    performance: {
            hints: false
        },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins:[
          new HWP(
          {template: path.join(__dirname,`/src/index.html`)}
       )
   ]
}