import User from '../model/userModel.js';

export const create = async(req,res)=>{
    try {
        const userData= new User(req.body);
        const{email}=userData;
        const userExit= await User.findOne({email});
        if(userExit){
          return  res.status(404).json({msg:"User already exits"});
        }
        if (!userData) {
            res.status(404).json({ msg: "User not exist" });
        }

        const saveData= await userData.save();
        res.status(202).json(saveData);
    } catch (error) {
        res.status(505).json({error:error});
    }
}

export const getAll = async(req,res)=>{
    try {
        const allUser=  await User.find();
        if(!allUser){
            res.status(404).json({msg:"User not exits"});
        }
        res.status(202).json(allUser);
    } catch (error) {
        res.status(505).json({error:error});
    }
}

export const getOne=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExit=await User.findById(id);
        if(!userExit){
            res.status(404).json({msg:"User not exits"});
        }
        res.status(202).json(userExit);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const updateUser= async(req,res)=>{
    try {
        const id=req.params.id;
        const userExit=await User.findById(id);
        if(!userExit){
            res.status(404).json({msg:"User not exits"}); 
        }
        const updateUser=await User.findByIdAndUpdate({_id: id},req.body,{new:true});
        res.status(202).json(updateUser);

    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const id=req.params.id;
        const userExit=await User.findById(id);
        if(!userExit){
            res.status(404).json({msg:"User not exits"}); 
        }
        await User.findByIdAndDelete(id);
        res.status(202).json({msg:"User Deleted"})
    } catch (error) {
        res.status(500).json({error:error});
    }
}