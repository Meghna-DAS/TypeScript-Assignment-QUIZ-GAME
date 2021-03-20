console.clear()

class quiz_Game
{
    team_name:string
	count:number;
	
    score1:number
    score2:number
	
  ques1:string 
	ques2:string
	ques3:string
	ques4:string
	ques5:string
	ques6:string
	ques7:string
	ques8:string
	ques9:string
	ques10:string
	
  ans1:string
	ans2:string
	ans3:string
	ans4:string
	ans5:string
	ans6:string
	ans7:string
	ans8:string
	ans9:string
	ans10:string

constructor()
{
    this.team_name=" "
	
    this.score1=10
    this.score2=10
	this.team_name=String(prompt("Enter Team Name"))
    console.log("Team name is:" + this.team_name)

	confirm("Starting Quiz")
    this.ques1=String(prompt("Who is the author of Gulliver's Travels?")).trim()
  	this.ques2 =String(prompt("Who is the author of Angels and Demons?")).trim()
  	this.ques3=String(prompt("What is the chemical symbol for gold?")).trim()
  	this.ques4=String(prompt("What is force per unit area?")).trim()
  	this.ques5=String(prompt("What is the capital of Uttar Pradesh?")).trim()
  	this.ques6=String(prompt("When was Taj Mahal built?")).trim()
  	this.ques7=String(prompt("What is the value of pi?(upto 2 decimal places)")).trim()
  	this.ques8=String(prompt("What is the smallest three digit number?")).trim()
  	this.ques9=String(prompt("What is the green pigment in leaves called?")).trim()
  	this.ques10=String(prompt("How many members are currently in parliament of India?")).trim()
	
    this.ans1="Jonathan Swift"
	this.ans2="Dan Brown"
	this.ans3="Au"
	this.ans4="Pressure"
	this.ans5="Lucknow"
	this.ans6="1613"
	this.ans7="3.14"
	this.ans8="100"
	this.ans9="Chlorophyll"
	this.ans10="545"
	
	this.count = 0;
}

checkScore():void
{	
	console.log("Team " + this.team_name +"'s log");

	if(this.ques1.toLowerCase()===this.ans1.toLowerCase())
		this.count += 1;
	else
		this.count -= 1;
	
	console.log(this.count);
	
	if(this.ques2.toLowerCase()===this.ans2.toLowerCase())
		this.count += 1;
	else
		this.count -= 1;
	
	console.log(this.count);

	if(this.ques3.toLowerCase()===this.ans3.toLowerCase())
		this.count += 1;
	else
		this.count -= 1;
	
	console.log(this.count);

	if(this.ques4.toLowerCase()===this.ans4.toLowerCase())
		this.count += 1;
	else
		this.count -= 1;
	
	console.log(this.count);

	if(this.ques5.toLowerCase()===this.ans5.toLowerCase())
		this.count += 1;
	else
		this.count -= 1;
	
	console.log(this.count);

	if(this.ques6.toLowerCase()===this.ans6.toLowerCase())
		this.count += 1;
	else
		this.count -= 1;
	
	console.log(this.count);

	if(this.ques7.toLowerCase()===this.ans7.toLowerCase())
		this.count += 1;
	else
		this.count -= 1;
	
	console.log(this.count);

	if(this.ques8.toLowerCase()===this.ans8.toLowerCase())
		this.count += 1;
	else
		this.count -= 1;
	
	console.log(this.count);

	if(this.ques9.toLowerCase()===this.ans9.toLowerCase())
		this.count += 1;
	else
		this.count -= 1;
	
	console.log(this.count);

	if(this.ques10.toLowerCase()===this.ans10.toLowerCase())
		this.count += 1;
	else
		this.count -= 1;
		
	console.log(this.count);

	if(this.count<0){
		console.log("decreasing values for no reason")
		console.log(this.count)
		this.count=0;
	}

}
}

function compareScore(t1:quiz_Game,t2:quiz_Game):void
{

    if(t1.count>t2.count)
    {
		console.log("Total Score of Team "+ t1.team_name+ " is: " + t1.count)
		console.log("Total Score of Team " +t2.team_name+ " is: "+ t2.count)
        console.log("Team " + t1.team_name + " won the game")
    }
    else if(t1.count<t2.count)
    {
		console.log("Total Score of Team "+ t1.team_name+ " is: " + t1.count)
		console.log("Total Score of Team " +t2.team_name+ " is: "+ t2.count)
        console.log("Team " + t2.team_name + " won the game")
    }
    else
    {
		console.log("Total Score of Team "+ t1.team_name+ " is: " + t1.count)
		console.log("Total Score of Team " +t2.team_name+ " is: "+ t2.count)
        console.log("Draw")
    }
}
console.clear()
var t1=new quiz_Game()
var t2=new quiz_Game()

t1.checkScore()

t2.checkScore()

compareScore(t1,t2)
