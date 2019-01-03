#include "pch.h"	
#include "stack.h"
#include "linked-list.h"

void main()
{
	Stack stack = Stack(10);

	stack.push(1);
	stack.push(3);
	stack.push(4);

	stack.pop();

	stack.print();

}

