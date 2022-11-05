#!/usr/bin/env node
const router = require("express").Router();

class SystemRouter{

    constructor(){}

    async test(req:any,res:any){
        try{
            res.json({
                code: 200,
                message: "SUCCESS",
                data: {}
            })
        }catch(err:any){
            res.json({
                code: 400,
                message: err.emessage,
                data: {}
            })
        }finally{
            console.log("Test")
        }
    }
}

const system = new SystemRouter();
router.get("/", async(req:any,res:any)=>await system.test(req,res) );
export default router;