import type { Binding } from "@rbxts/roact";
import type { CoreHooks } from "@rbxts/roact-hooks";
import type { SingleMotor, GroupMotor, Linear, Spring } from "@rbxts/flipper";

type SingleMotorParam = ConstructorParameters<typeof SingleMotor>[0];
type GroupMotorParam = ConstructorParameters<typeof GroupMotor>[0];
type MotorInitialValue = SingleMotorParam | GroupMotorParam;
type Motor<T extends MotorInitialValue> = T extends SingleMotorParam ? SingleMotor : GroupMotor<T>;

declare function getBinding<T extends MotorInitialValue>(motor: SingleMotor | GroupMotor<T>): Binding<T>;
declare function useMotor<T extends MotorInitialValue>(hooks: CoreHooks, initialValue: T): Motor<T>;
declare function useGoal<T extends MotorInitialValue>(
	hooks: CoreHooks,
	initialValue: T,
): LuaTuple<[Binding<T>, Motor<T>]>;
declare function useInstant<T extends MotorInitialValue>(
	hooks: CoreHooks,
	targetValue: T,
): LuaTuple<[Binding<T>, Motor<T>]>;
declare function useSpring<T extends MotorInitialValue>(
	hooks: CoreHooks,
	targetValue: T,
	options?: ConstructorParameters<typeof Spring>[1],
): LuaTuple<[Binding<T>, Motor<T>]>;
declare function useLinear<T extends MotorInitialValue>(
	hooks: CoreHooks,
	targetValue: T,
	options?: ConstructorParameters<typeof Linear>[1],
): LuaTuple<[Binding<T>, Motor<T>]>;

declare const roactFlipperReturn: {
	getBinding: typeof getBinding;

	useMotor: typeof useMotor;
	useGoal: typeof useGoal;
	useInstant: typeof useInstant;
	useSpring: typeof useSpring;
	useLinear: typeof useLinear;
};
export = roactFlipperReturn;
