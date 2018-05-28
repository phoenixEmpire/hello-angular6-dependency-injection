import { Component, Optional, forwardRef, SkipSelf } from '@angular/core';

// A component base class (see AlexComponent)
export abstract class Base {
    name = 'Count Basie';
}

// Marker class, used as an interface
export abstract class Parent {
    name: string;
}

const DifferentParent = Parent;

// Helper method to provide the current component instance in the name of a `parentType`.
// The `parentType` defaults to `Parent` when omitting the second parameter.
const provideParent = (component: any, parentType?: any) => {
    return { provide: parentType || Parent, useExisting: forwardRef(() => component) };
};

// Simpler syntax version that always provides the component in the name of `Parent`.
const provideTheParent = (component: any) => {
    return { provide: Parent, useExisting: forwardRef(() => component) };
};

/****** C - Child ******/

const templateC = `
            <div class="c">
                <h3>{{name}}</h3>
                <p>My parent is {{parent?.name}}</p>
            </div>
        `;

@Component({
    selector: 'app-carol',
    template: templateC
})
export class CarolComponent {
    name = 'Carol';
    constructor(@Optional() public parent: Parent) { }
}

@Component({
    selector: 'app-chris',
    template: templateC
})
export class ChrisComponent {
    name = 'Chris';
    constructor(@Optional() public parent: Parent) { }
}

/****** CraigComponent ******/

// Show we cannot inject a parent by its base class.

@Component({
    selector: 'app-craig',
    template: `
        <div class="c">
            <h3>Craig</h3>
            {{alex?'Found':'Did not find'}} Alex via the base class.
        </div>
    `
})
export class CraigComponent {
    constructor(@Optional() public alex: Base) { }
}

/****** B - Parent *******/

const templateB = `
    <div class="b">
        <div>
            <h3>{{name}}</h3>
            <p>My parent is {{parent?.name}}</p>
        </div>
        <app-carol></app-carol>
        <app-chris></app-chris>
    </div>
`;

@Component({
    selector: 'app-barry',
    template: templateB,
    providers: [{ provide: Parent, useExisting: forwardRef(() => BarrayComponent) }]
})
export class BarrayComponent implements Parent {
    name = 'Barray';
    // 使用Parent注入令牌，找到注册的供应商
    constructor(@SkipSelf() @Optional() public parent: Parent) { }
}

@Component({
    selector: 'app-bob',
    template: templateB,
    providers: [provideParent(BobComponent)]
})
export class BobComponent implements Parent {
    name = 'Bob';
    constructor(@SkipSelf() @Optional() public parent: Parent) { }
}

@Component({
    selector: 'app-beth',
    template: templateB,
    providers: [provideParent(BethComponent, DifferentParent)]
})
export class BethComponent implements Parent {
    name = 'Beth';
    //  虽然注入令牌是Parent，但通过DifferentParent也能找到注册的供应商 （DifferentParent===Parent）
    constructor(@SkipSelf() @Optional() public parent: Parent) { }
}

/****** A - Grandparent ******/

@Component({
    selector: 'app-alex',
    template: `
        <div class="a">
            <h3>{{name}}</h3>
            <app-cathy></app-cathy>
            <app-craig></app-craig>
            <app-carol></app-carol>
        </div>
    `,
    providers: [{ provide: Parent, useExisting: forwardRef(() => AlexComponent) }]
})
export class AlexComponent extends Base {
    name = 'Alex';
}

@Component({
    selector: 'app-alice',
    template: `
        <div class="a">
            <h3>{{name}}</h3>
            <app-barry></app-barry>
            <app-beth></app-beth>
            <app-bob></app-bob>
            <app-carol></app-carol>
        </div>
    `,
    providers: [provideParent(AliceComponent)]
})
export class AliceComponent implements Parent {
    name = 'Alice';
}

/****** CathyComponent ******/

@Component({
    selector: 'app-cathy',
    template: `
        <div class="c">
            <h3>Cathy</h3>
            {{alex ? 'Found' : 'Did not find'}} Alex via the component class.<br>
        </div>
    `
})
export class CathyComponent {
    //  虽然注入令牌是Parent，但通过AlexComponent也能找到注册的供应商 (Parent令牌，映射到的类就是AlexComponent)
    constructor(@Optional() public alex: AlexComponent) { }
}

/****** ParentFinderComponent ******/

@Component({
    selector: 'app-parent-finder',
    template: `
        <h2>Parent Finder</h2>
        <app-alex></app-alex>
        <app-alice></app-alice>
    `
})
export class ParentFinderComponent { }
