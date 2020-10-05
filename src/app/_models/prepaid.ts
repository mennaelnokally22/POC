export class Prepaid implements Journey{
    printMessage(): void {
        console.log('Message from prepaid class');
    }

    setErrorMessage(message: string):void{
        console.log(`Error Message from prepaid journey is ${message}`);
    }
}