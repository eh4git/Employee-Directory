import axois from "axios";

export default {
    //gets all the users
    getUsers: function() {
        return axois.get("https://randomuser.me/api/?results=200&nat=us");
    }
}