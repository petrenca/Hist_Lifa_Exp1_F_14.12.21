let subsequence;
let repeat;
(function (){
    function Times(n,predicate){
        this.predicate = predicate;
        this.n = n;
    }
    
    repeat = (predicate,n) => {
        if (n<=0) return predicate;
        else return new Times(n,predicate);
    };
    
    function Subsequence(...predicates) {
        this.args = [];
        this.times = [];
        for (let i = 0; i < predicates.length; i++){
            let predicate = predicates[i];
            if (predicate instanceof Times){
                this.args.push(predicate.predicate);
                this.times.push(predicate.n);
            }
            else{
                this.args.push(predicate);
                this.times.push(1);
            }
        }
    
        this.run = function(arrays) {
            let remainingPredicates = arrays.length;
            let newArray = [];
        
            while (remainingPredicates > 0){
                for (let n = 0; n < arrays.length; n++){
                    let predicate = arrays[n];
                    for (let times = 0; times < this.times[n] && predicate.length > 0; times++)
                        newArray.push( predicate.pop() );
                    if (predicate.length===0) remainingPredicates--;
                }
            }
            return newArray;
        };
    }
    
    subsequence = (...predicates) => new Subsequence(...predicates);
}());