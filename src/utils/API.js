import axois from "axios";

export default {
    //gets all the users data
    getUsers: function() {
        return axois.get("https://randomuser.me/api/?results=200&nat=us");
    }
}