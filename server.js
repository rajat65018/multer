const { error } = require('console');
const express=require('express');

const multer=require('multer');

const upload=multer({
    dest:'images',
    fileFilter(req,file,cb){
        if(!file.originalname.endsWith('.jpg')){
         cb(new Error('please upload file with jpg extension'));
        }
        cb(null,true);
    }
});

const app=express();

app.use(express.json());

app.post('/upload',upload.single('upload'),(req,res)=>{
    res.json({message:'file uploaded successfully'});
});

app.listen(8000,()=>{
    console.log('server running');
})