const functionLogic = require('./CodeToFail').multipleOf3AndOr5;

//obj of tdd is to ensure we know how our code fails instead of someone else telling us 




   /*

 Kent Dodds  
( Testing best practices )


    1) Is the input a number
    2) multiple of 3 and multiple of 5
    3) multiple of only 3
    4) multiple of only 5
    5) neither a multiple of 3 nor a multiple of 5
   */

    //test suite
describe('functionLogic()', () => {

  /*
  beforeAll()=>{


  },

  afterAll()=>{


  },
  
  */
  it('returns "notANumber" for input which isnt a number', () => {


    expect(functionLogic("dssdssdsd")).toBe('inputNotANumber');
    
    expect(functionLogic(60)).not.toBe('inputNotANumber'); //mul of 3 and 5
    
    
    expect(functionLogic(21)).not.toBe('inputNotANumber'); //mul of 3
    

    expect(functionLogic(50)).not.toBe('inputNotANumber'); //mul of 5
    
    
    
    expect(functionLogic(22)).not.toBe('inputNotANumber'); //neither mul of 3 or/and a mul of 5
    
  

  }),

  it('returns "multiple" for multiples of 3 and 5', () => {
    expect(functionLogic(15)).toBe('multipleOf3And5');
    expect(functionLogic(30)).toBe('multipleOf3And5');
    expect(functionLogic(45)).toBe('multipleOf3And5');
    expect(functionLogic(46)).not.toBe('multipleOf3And5');
    expect(functionLogic("fddfddf")).not.toBe('multipleOf3And5');

    
    //expect(functionLogic(9)).not.toBe('multiple');
    
   // expect(functionLogic(30)).toBe('multiple');
  })




  
  it('returns "multiple" for multiples of only 3', () => {
    expect(functionLogic(3)).toBe('multipleOf3');
    expect(functionLogic(33)).toBe('multipleOf3');
    expect(functionLogic(60)).not.toBe('multipleOf3');
    expect(functionLogic(32)).not.toBe('multipleOf3');
    expect(functionLogic(50)).not.toBe('multipleOf3');
    expect(functionLogic("fddfddf")).not.toBe('multipleOf3');

    
    
  })
  ,
  it('returns "multipleOf5" for multiples of only 5', () => {
    expect(functionLogic(55)).toBe('multipleOf5');
    expect(functionLogic(78)).not.toBe('multipleOf5');
    expect(functionLogic(89)).not.toBe('multipleOf5');
    expect(functionLogic("fddfddf")).not.toBe('multipleOf5');

  }),


  
  it('returns notAMultiple for multiples of neither 3 nor 5', () => {
    expect(functionLogic(47)).toBe('notAMultipleOf3And5');
    expect(functionLogic(22)).toBe('notAMultipleOf3And5');
    expect(functionLogic(60)).not.toBe('notAMultipleOf3And5');
    expect(functionLogic(6)).not.toBe('notAMultipleOf3And5');
    expect(functionLogic(20)).not.toBe('notAMultipleOf3And5');
    expect(functionLogic("dsdsdsdsdsds")).not.toBe('notAMultipleOf3And5');
    
    
    
    
  });



  /*

  it('returns "multiple" for multiples of 5', () => {
    expect(functionLogic(5)).toBe('multiple');
    expect(functionLogic(20)).toBe('multiple');
  });

  it('returns notAMultiple for multiples of neither 3 nor 5', () => {
    expect(functionLogic(1)).toBe('notAMultiple');
    expect(functionLogic(22)).toBe('notAMultiple');
  });

*/

});

//npm run test=>npx jest 

//automatically monitors test changes and runs them
// npx jest --watchAll


//Jest is its built-in code coverage measurement. This shows you how much of the code being tested actually ran during tests. To compute code coverage, add the --coverage flag. By default, this saves a report to a coverage directory and shows a summary in the console. 
//To just get that summary output, use the flag --coverageReporters=text:
// npx jest  -- --coverage --coverageReporters=text