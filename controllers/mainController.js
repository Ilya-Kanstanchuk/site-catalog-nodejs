const getMainPage = (req, res)=>{
    res.render("index", {title: "Main"});
};
export default {
    getMainPage,
}