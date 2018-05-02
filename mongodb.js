//mongoose的CURD操作实例
const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/mongoose');
const mongooseSchema = new mongoose.Schema({
  username : {type : String, default : '匿名用户'},
  title    : {type : String},
  content  : {type : String},
  time     : {type : Date, default: Date.now},
  age      : {type : Number}
})
mongooseSchema.methods.findbyusername = function(username, callback) { // 添加实例方法
  return this.model('mongoose').find({username: username}, callback);
}

mongooseSchema.statics.findbytitle = function(title, callback) { // 添加静态方法
  return this.model('mongoose').find({title: title}, callback);
}

const mongooseModel = db.model('mongoose', mongooseSchema);

// 增加记录 基于 entity 操作
// const doc = {username : 'ty', title : '这是个测试数据', content : '内容什么的都是胡写的'};
// const mongooseEntity = new mongooseModel(doc);
// mongooseEntity.save(function(error) {
//   if(error) {
//       console.log(error);
//   } else {
//       console.log('saved OK!');
//   }
// });

// 增加记录 基于model操作
// var doc = {username : 'model_demo_username', title : 'model_demo_title', content : 'model_demo_content'};
// mongooseModel.create(doc, function(error){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('save ok');
//     }
// });


// 修改记录
// const conditions = {username : 'model_demo_username'};
// const update     = {$set : {age : 27, title : 'model_demo_title_update'}};
// const options    = {upsert : true};
// mongooseModel.update(conditions, update, options, function(error){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('update ok!');
//     }
// });

// 查询
// 基于实例方法的查询
// const mongooseEntity = new mongooseModel({});
// mongooseEntity.findbyusername('model_demo_username', function(error, result){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(result);
//     }
// });

// 基于静态方法的查询
// mongooseModel.findbytitle('model_demo_title_update', function(error, result){
//   if(error) {
//       console.log(error);
//   } else {
//       console.log(result);
//   }
// });

// mongoose find
// const criteria = {title : 'model_demo_title_update'}; // 查询条件
// const fields   = {title : 1, content : 1, time : 1}; // 待返回的字段
// const options  = {};
// mongooseModel.find(criteria, fields, options, function(error, result){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(result);
//     }
// });



// 删除记录
// const conditions = {title: 'model_demo_title_update'};
// mongooseModel.remove(conditions, function(error){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('delete ok!');
//     }
// });


db.on('open', function() {
  console.log('连接成功');
});