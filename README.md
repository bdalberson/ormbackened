# ormbackened


| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     
| Node.JS| [https://developer.mozilla.org/en-US/docs/Glossary/Node.js?utm_source=wordpress%20blog&utm_medium=content%20link&utm_campaign=promote%20mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)    
| Mysql2 |:https://www.npmjs.com/package/mysql2:| 



## Description 
![plot](./assets/Screen%20Shot%202023-05-05%20at%208.52.20%20AM.png)


Video of the application in action: https://drive.google.com/file/d/1sLNdduFcP0Uog8saGDbSZqeZ8wrffi1r/view


This is a ORM backend which has a list of products and their catagories and tags for easy tracking and showing off to the customer.  



## Code Refactor Example


Below is a model table for mysql backend db creation

```Javascript


class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category', 
  }
);
module.exports = Category;
```

Below is a route for creating a new tag

``` JavaScript

router.post('/', async(req, res) => {
  const tag = await Tag.create(req.body);
    res.status(200).json(tag);
    console.log("new tag created")
});

``` 



## Usage 

You will need to clone down all the repro.  Install the needed NPM packages. Then you will need to run a schema or manually insert data into the database.  Afterwards you will probably need to update the MYSQL data to have you have locally.  Then you will be able to execute the program by running "npm watch"


## Learning Points 


Geeze learning MYSQL and how to do async functions was quite a beast.Sequelize helps but doesn't help at the same time.  I failed and failed and failed some more untiL I was finally able to get some help and get over the hump.   Hopefully the demo demonstrates that it all works and is functional.  

## Author Info

SWEngineer secretely regretting all my life choices that lead to this point. 

* [Portfolio](https://bdalberson.github.io/Course2Biopage/)
* [LinkedIn](https://www.linkedin.com/in/brian-alberson-464b2271/)
* [Github](https://github.com/bdalberson)
```

## Credits

Mostly slap this one together myself, hope it impresses. 

---

## Tests
Just testing using Mysql workbench to verify datatables and Insomnia to verify route data.   
