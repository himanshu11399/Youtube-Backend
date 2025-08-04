class Apierror extends Error{
    constructor(
        statusCode,
        message="Something Went Wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusCode = statusCode;
        this.data=null
        this.message=messagethis.success=false
        this.errors=errors

        if(stactck){
            this.stack=statck

        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {Apierror}