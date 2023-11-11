function Stopwatch(){
    let duration, startTime, endTime, running = 0;
    this.start = function(){
        if (running)
            throw new Error("The stopwatch has already started");
        running = true;
        startTime = new Date();
    };
    this.stop = function(){
        if (!running)
            throw new Error("The stopwatch is not running");
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000; // convert milliseconds to seconds
        duration += seconds;
    };
    this.reset()= function(){

    };

    Object.defineProperty(this, 'duration', {
        get : function() {
            return duration; }
    });

};

