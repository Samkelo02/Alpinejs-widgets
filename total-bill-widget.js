document.addEventListener('alpine:init', () => {

    Alpine.data('totalPhoneBillWidget',function(){
        return {
            string:'',
            stringAmount:'',
            calculateTotal(){
                this.stringAmount=totalPhoneBill(this.string)
                setTimeout(()=>{
                    this.string=''
                    this.stringAmount=''
                },5000)
            }
            

        }
    })
})