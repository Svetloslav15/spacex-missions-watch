export default {
    calculateTimeBetweenTwoDates(launchDate) {
        launchDate = new Date(launchDate);
        let dateNow = new Date();
        let seconds = Math.floor((launchDate - (dateNow))/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/24);
        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
        return {
            seconds, minutes, hours, days
        }
    }
}