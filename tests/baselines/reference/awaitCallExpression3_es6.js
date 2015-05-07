//// [awaitCallExpression3_es6.ts]
declare var a: boolean;
declare var p: Promise<boolean>;
declare function fn(arg0: boolean, arg1: boolean, arg2: boolean): void;
declare var o: { fn(arg0: boolean, arg1: boolean, arg2: boolean): void; };
declare var pfn: Promise<{ (arg0: boolean, arg1: boolean, arg2: boolean): void; }>;
declare var po: Promise<{ fn(arg0: boolean, arg1: boolean, arg2: boolean): void; }>;
async function func(): Promise<void> {
    "before";
    var b = fn(a, await p, a);
    "after";
}

//// [awaitCallExpression3_es6.js]
function func() {
    return __awaiter(function *() {
        "before";
        var b = fn(a, yield p, a);
        "after";
    }.apply(this, arguments), Promise);
}
