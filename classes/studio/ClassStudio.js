//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores =[]){
        this.name=name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }

    average(){
        let sum =0;
        for(let i=0; i<this.scores.length; i++){
            sum +=this.scores[i];
        }
        return Math.round((sum/this.scores.length)*10)/10;
    }

    status(){
        let status;
        let avgScore = this.average();
        if(avgScore>=90){
            status = "Accepted";
        }
        else if (avgScore>=80 && avgScore<90){
            status ="Reserve";
        }
        else if(avgScore>=70 && avgScore<80){
            status ="Probationary";
        }
        else {
            status = "Rejected"
        }
        return status;
    }
   
}
let bubba = new CrewCandidate("Bubba Bear", 135,[88,85, 90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let glad = new CrewCandidate('GladGator', 225, [75,78, 62]);
console.log(bubba);
console.log(merry);
console.log(glad);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubba.addScore(83);
console.log(bubba.scores);
console.log(`${bubba.name} earned an average test score of ${bubba.average()} and has status of ${bubba.status()}.`);
console.log(`${merry.name} earned an average test score of ${merry.average()} and has status of ${merry.status()}.`);
console.log(`${glad.name} earned an average test score of ${glad.average()} and has status of ${glad.status()}.`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

