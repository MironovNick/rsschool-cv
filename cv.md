[rsschool-cv](https://github.com/MironovNick/rsschool-cv)

---



# Mironov Nikita

### Junior front-end developer

---

### Contact information:



**Phone number:** + 375 29 6999242  

**E-mail:** mironov.nik88@gmail.com  

**Telegram:** @mironovnik  

[Facebook](https://)  

[Github](https://github.com/MironovNick)



---

### Skills:



* HTML  

* CSS (Bootstrap, Flexbox, Grid)  

* JavaScript (basics)  

* Version control: Git (remote service GitHub)  

* Figma(for web development)  



---

### About me:



My main task is to gain new knowledge for the successful completion of the course and apply it in practice.  

I like hockey, heavy music and front-end developing offcourse.



---
### Code examples:  



Example of the code with an object and it's properties and methods within

```javascript  

function Tagger(state) {
	
	
this._readOnly = state;
	this._tag_arr = [{name:'tagname1', index: 0}, {name:'tagname2', index: 1}];
	
	
Object.defineProperties(this, {
        
readOnly: {
             
get: function() { return this._readOnly; },
             
set: function(val) { this._readOnly = val; }
        
}
    
});
	
	
this.addTag = function(tag_name) {
		
		
if(!this.readOnly && tag_name != ''){
			
				
let new_tag = {name: '', index: 0};
				
				
if(this._tag_arr.length > 0)
					
new_tag.index = this._tag_arr[this._tag_arr.length - 1].index + 1;
				
				
new_tag.name = tag_name;
				
this._tag_arr.push(new_tag);
			
}
	
}

};


```



---
### Experience:



* ASCON-Nieman, HTML-coder 2018 - 2020



---

### Education and courses:



* Belarusian State University of Informatics and Radioelectronics, 2017  

* IT-school Myfreedom, React.js, 2019  

* LeverX Group, Front-end Programming, 2020



---

### Language:



* English level - B1

