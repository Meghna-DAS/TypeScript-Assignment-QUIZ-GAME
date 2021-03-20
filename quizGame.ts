console.clear()

class quiz_Game
{
  team_name:string
	count:number;
	
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
	
	this.team_name=String(prompt("Enter Team Name"))
    console.log("Team name is:" + this.team_name)

	confirm("Starting Quiz")

    this.ques1=String(prompt("A word that is used for joining other words, phrases or sentences, in grammar is called?")).trim()
  	this.ques2 =String(prompt("Which programming language is designed for the development of large applications and transcompiles to JavaScript?")).trim()
  	this.ques3=String(prompt("What is the chemical symbol for gold?")).trim()
  	this.ques4=String(prompt("What is force per unit area?")).trim()
  	this.ques5=String(prompt("What is the capital of Uttar Pradesh?")).trim()
  	this.ques6=String(prompt("When was Taj Mahal built?")).trim()
  	this.ques7=String(prompt("What is the value of pi?(upto 2 decimal places)")).trim()
  	this.ques8=String(prompt("What is the smallest three digit number?")).trim()
  	this.ques9=String(prompt("What is the green pigment in leaves called?")).trim()
  	this.ques10=String(prompt("How many members are currently in parliament of India?")).trim()
	
  this.ans1="Conjunction"
	this.ans2="TypeScript"
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
	
	console.log("Answer 1 fetched you: " + this.count + " score");
	
	if(this.ques2.toLowerCase()===this.ans2.toLowerCase())
		this.count += 1;
	
	console.log("Answer 2 fetched you: " + this.count + " score");

	if(this.ques3.toLowerCase()===this.ans3.toLowerCase())
		this.count += 1;
	
	console.log("Answer 3 fetched you: " + this.count + " score");

	if(this.ques4.toLowerCase()===this.ans4.toLowerCase())
		this.count += 1;
	
	console.log("Answer 4 fetched you: " + this.count + " score");

	if(this.ques5.toLowerCase()===this.ans5.toLowerCase())
		this.count += 1;

	console.log("Answer 5 fetched you: " + this.count + " score");

	if(this.ques6.toLowerCase()===this.ans6.toLowerCase())
		this.count += 1;
	
	console.log("Answer 6 fetched you: " + this.count + " score");

	if(this.ques7.toLowerCase()===this.ans7.toLowerCase())
		this.count += 1;

	console.log("Answer 7 fetched you: " + this.count + " score");

	if(this.ques8.toLowerCase()===this.ans8.toLowerCase())
		this.count += 1;

	
	console.log("Answer 8 fetched you: " + this.count + " score");

	if(this.ques9.toLowerCase()===this.ans9.toLowerCase())
		this.count += 1;
	
	console.log("Answer 9 fetched you: " + this.count + " score");

	if(this.ques10.toLowerCase()===this.ans10.toLowerCase())
		this.count += 1;

	console.log("Answer 10 fetched you: " + this.count + " score");

	if(this.count<0){
		console.log("decreasing values for no reason")
		console.log(this.count)
		this.count=0;
	}

}
}

function compareScore(t1:quiz_Game,t2:quiz_Game):void
{
    console.log("Total Score of Team "+ t1.team_name+ " is: " + t1.count)
	console.log("Total Score of Team " +t2.team_name+ " is: "+ t2.count)

    if(t1.count>t2.count)
    {
        console.log("Team " + t1.team_name + " won the game")
    }
    else if(t1.count<t2.count)
    {
        console.log("Team " + t2.team_name + " won the game")
    }
    else
    {
        console.log("Draw")
    }
}
console.clear()
var t1=new quiz_Game()
var t2=new quiz_Game()

t1.checkScore()

t2.checkScore()

compareScore(t1,t2)
