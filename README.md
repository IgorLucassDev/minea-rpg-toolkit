

<br>

<h1 align="center">Minea RPG Toolkit</h1>
<p align="center">
  <strong>Um conjunto de ferramentas API para RPG</strong>
</p>
<p align="center">
  <a href="https://github.com/IgorLucassDev/minea-rpg-toolkit/issues"><img src="https://img.shields.io/github/issues/IgorLucassDev/minea-rpg-toolkit" alt="Issues"></a>
  <a href="https://github.com/IgorLucassDev/minea-rpg-toolkit/stargazers"><img src="https://img.shields.io/github/stars/IgorLucassDev/minea-rpg-toolkit" alt="Stars"></a>
  <a href="https://github.com/IgorLucassDev/minea-rpg-toolkit/network/members"><img src="https://img.shields.io/github/forks/IgorLucassDev/minea-rpg-toolkit" alt="Forks"></a>
</p>
</div>

## Instalation and Run
#### Clonning repository

```bash
git clone https://github.com/IgorLucassDev/minea-rpg-toolkit.git

cd minea-rpg-toolkit
```

#### Running application
To run, you first must be in `./server` directory
```bash
cd server
```

After you can start application by running
```bash
npm run dev
```



#### 


## API usage
### Names

#### Randon Name Generation

You can generate random names by fetching `/names/random` route


**Example usage**
```javascript

const randomName = async () =>{
  const data = await fetch('localhost:3000/names/random').json();
  console.log(data)
}


// Output:
// {
//    "name": "Vesper",
//    "surname": "Yewgrove"
// }
```

You also can update name list
```
└───src
    └───routes
        ├───classes
        ├───dice
        └───name
            └───list
                └─── nameList.js
                └─── surNames.js
```

**nameList.js**
```javascript
const nameList = [
    "Ana",
    "Bruno",
    "Carlos",
    "Daniela",

    // You can add more options here

]

export default nameList;
```

### Classes

You can generate random classes by fetch `/class/random` route

It´s will return a random class


**Example usage**

```javascript

const randomClass = async () =>{
  const data = await fetch('localhost:3000/class/random').json();
  console.log(data)
}


// Output:
// {
//    "class": "Wizzard",
// }

```

Same as names you can edit class list in 

```
└───src
    └───routes
        ├───classes
           └─── classes.js
           └─── classList.js
        ├───dice
        └───name 
```


