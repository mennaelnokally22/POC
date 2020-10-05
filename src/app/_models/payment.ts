export class Payment implements Journey{
    printMessage(): void {
        console.log('Message from payment class');
    }

    setErrorMessage(message: string):void{
        console.log(`Error Message from payment journey is ${message}`);
    }
}