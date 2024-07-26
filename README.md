# minea-rpg-toolkit

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
}


//Output:
// {
//    "name": "Vesper",
//    "surname": "Yewgrove"
// }
```
