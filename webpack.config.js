var path = require('path');
 
module.exports = {
    entry: "./web_client/app.jsx", // входная точка - исходный файл
    output:{
        path: `${__dirname}/backend/Deputies/Declarations/static`,
       filename: 'app.js'
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
            }
        ]
    }
}