import  {letter} from './letter'

const regex = /^[0-9]$/

export const convert = (number: string,base : number, toBase : number) => {
   let base10 = toBase10(number,base)
   return toOtherBase(base10,toBase)
}

const toOtherBase = (base10:number, base:number)=>{
  let result:number[] = []
  toOtherBaseRecursive(base10,base,result)
  return convertToNumber(result)
}

const toOtherBaseRecursive = (base10:number, base:number, result: number[]) =>{
    if(base10>=base){
      result.push(base10-(base*Math.trunc(base10/base)))
      toOtherBaseRecursive(Math.trunc(base10/base),base,result)
    }else{
      result.push(base10)
    }
}

const toBase10 = (number: string,base : number) =>{
  let numbers = number.split('')
  let result = 0
  for(let i in numbers){
    let indexAux = (numbers.length-1)-Number(i)
    result += Number(valideNumberOrLetter(numbers[indexAux]))*(Math.pow(base,Number(i)))
  }
  return result
}

const convertToNumber = (resultList:number[]) =>{
  let result = ''
  for(let i in resultList){
      result += valideLetterOrNumber(resultList[((resultList.length-1)-Number(i))])
    }
  return result
}

const valideLetterOrNumber = (number:number) =>{
  return !(number>9)?number: letter.letters.find(n => n.value === number)?.letter
}

const valideNumberOrLetter = (number:string) =>{
  return  regex.test(number)?number: letter.letters.find(n => n.letter === number)?.value
}

export const  bases = () =>{
  let bases = []
  for (let i = 2; i < 37; i++) {
    bases.push(i)
  }
  return bases
}



