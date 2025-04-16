const getContactsPage = (req, res)=>{
    res.render("contacts", {title: "Contacts"});
};
export default {
    getContactsPage
}