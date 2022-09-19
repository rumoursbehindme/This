//mport _marko_template from './d'
const fastify=require("fastify")({logger:true})
const mp = require('@marko/fastify')
const mt =require('./d').default

fastify.register(mp)


fastify.get('/',(req,rep)=>{

  rep.marko(mt,{name:"Sanjay",aname:"Rj"})
//  rep.send(mt.default.renderToString())
})

fastify.listen({port:3000})