function solution(edges) {
    // 생성된 노드, 도넛, 막대, 8자 그래프 개수를 저장할 변수
    let createdNode = 0;
    let donut = 0;
    let stick = 0;
    let eight = 0;
    
    // 진입 차수와 진출 차수를 기록할 객체
    const inDegree = {};
    const outDegree = {};
    
    // 모든 간선 정보를 통해 진입/진출 차수 계산
    edges.forEach(([from, to]) => {
        // 진출 차수 초기화 및 증가
        outDegree[from] = (outDegree[from] || 0) + 1;
        
        // 진입 차수 초기화 및 증가
        inDegree[to] = (inDegree[to] || 0) + 1;
        
        // 노드 존재 표시 (진입 차수가 없는 노드를 위해)
        inDegree[from] = inDegree[from] || 0;
        outDegree[to] = outDegree[to] || 0;
    });
    
    // 생성된 정점 찾기: 진출 차수 >= 2, 진입 차수 = 0
    for (const node in outDegree) {
        // 생성된 정점의 특징: 진출 차수 >= 2, 진입 차수 = 0
        if (outDegree[node] >= 2 && inDegree[node] === 0) {
            createdNode = parseInt(node);
            break;
        }
    }
    
    // 각 그래프 유형 분석
    // 진입 차수 0, 진출 차수 0인 노드 개수
    let noInOut = 0;
    // 진입 차수 2 이상, 진출 차수 2 이상인 노드 개수
    let multiInOut = 0;
    // 진입 차수 1 이상, 진출 차수 0인 노드 개수
    let endNodes = 0;
    
    for (const node in inDegree) {
        if (parseInt(node) === createdNode) continue;
        
        const in_degree = inDegree[node] || 0;
        const out_degree = outDegree[node] || 0;
        
        // 진입은 있고 진출은 없는 노드 (막대 그래프의 끝점)
        if (in_degree >= 1 && out_degree === 0) {
            endNodes++;
        }
        // 진입/진출이 모두 없는 노드 (그래프에 없는 노드)
        else if (in_degree === 0 && out_degree === 0) {
            noInOut++;
        }
        // 진입과 진출이 모두 2 이상인 노드 (8자 그래프의 교차점)
        else if (in_degree >= 2 && out_degree >= 2) {
            multiInOut++;
        }
    }
    
    // 생성된 정점에서 나가는 간선 = 총 그래프 수
    const totalGraphs = outDegree[createdNode];
    
    // 막대 그래프 수 = 막대 끝점 수
    stick = endNodes;
    
    // 8자 그래프 수 = 진입/진출이 모두 2 이상인 노드 수
    eight = multiInOut;
    
    // 도넛 그래프 수 = 전체 그래프 수 - (막대 + 8자)
    donut = totalGraphs - stick - eight;
    
    return [createdNode, donut, stick, eight];
}